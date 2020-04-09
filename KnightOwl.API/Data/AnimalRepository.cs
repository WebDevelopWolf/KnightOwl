using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KnightOwl.API.Models;
using Microsoft.EntityFrameworkCore;

namespace KnightOwl.API.Data
{
    public class AnimalRepository : IAnimalRepository
    {
        private readonly DataContext _context;

        public AnimalRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            throw new System.NotImplementedException();
        }

        public void Delete<T>(T entity) where T : class
        {
            throw new System.NotImplementedException();
        }

        public Task<Module> GetAnimal(int id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<Animal>> GetAnimalList(int classification)
        {
            var animals = await _context.Animals.Include(c => c.Classification)
            .Where(a => a.Classification.Id == classification).ToListAsync();
            return animals;
        }

        public Task<bool> SaveAll()
        {
            throw new System.NotImplementedException();
        }
    }
}