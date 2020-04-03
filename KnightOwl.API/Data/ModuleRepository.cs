using System.Collections.Generic;
using System.Threading.Tasks;
using KnightOwl.API.Models;
using Microsoft.EntityFrameworkCore;

namespace KnightOwl.API.Data
{
    public class ModuleRepository : IModuleRepository
    {
        private readonly DataContext _context;

        public ModuleRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Module> GetModule(int id)
        {
            var module = await _context.Modules.Include(s => s.SubModules).FirstOrDefaultAsync(m => m.ModuleId == id);
            return module;
        }

        public async Task<IEnumerable<Module>> GetModules()
        {
            var modules = await _context.Modules.Include(s => s.SubModules).ToListAsync();
            return modules;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}