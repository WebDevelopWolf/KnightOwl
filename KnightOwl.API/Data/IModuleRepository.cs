using System.Collections.Generic;
using System.Threading.Tasks;
using KnightOwl.API.Models;

namespace KnightOwl.API.Data
{
    public interface IModuleRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Module>> GetModules();
        Task<Module> GetModule(int id);
    }
}