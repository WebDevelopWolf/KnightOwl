using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using KnightOwl.API.Data;
using KnightOwl.API.Dtos;
using KnightOwl.API.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KnightOwl.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalsController : ControllerBase
    {
        private readonly IAnimalRepository _repo;
        private readonly IMapper _mapper;

        public AnimalsController(IAnimalRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        
        [HttpGet("{className}")]
        public async Task<IActionResult> GetAnimalsByClass(string className) {
            // Check if category exists 
            var classExists = Enum.IsDefined(typeof(ClassEnum), className);
            if (!classExists)
            {
                return BadRequest("No category exists");
            }
            // Get Numeric value
            var classification = (int)((ClassEnum) Enum.Parse(typeof(ClassEnum), className.ToLower()));
            // Get animals
            var animals = await _repo.GetAnimalList(classification);
            // Map animals to DTO
            var animalsToReturn = _mapper.Map<IEnumerable<AnimalForListDto>>(animals);
            // If animals in list
            if (animalsToReturn != null)
            {
                // Return Animals
                return Ok(animalsToReturn);
            }
            // If no animals return Not Found
            return NotFound("No animals found");
        }
    }
}