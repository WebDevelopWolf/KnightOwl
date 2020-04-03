using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using KnightOwl.API.Data;
using KnightOwl.API.Dtos;
using KnightOwl.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KnightOwl.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ModulesController : ControllerBase
    {
        private readonly IModuleRepository _repo;
        private readonly IMapper _mapper;

        public ModulesController(IModuleRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetModules()
        {
            var modules = await _repo.GetModules();
            var enabledModules = modules.Where(m => m.Enabled == true).OrderBy(m => m.ViewOrder);
            var modulesToRetun = _mapper.Map<IEnumerable<ModulesForNavDto>>(enabledModules);
            return Ok(modulesToRetun);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetModule(int id)
        {
            var module = await _repo.GetModule(id);
            var moduleToReturn = _mapper.Map<ModulesForSubNavDto>(module);
            return Ok(moduleToReturn);
        }
    }
}