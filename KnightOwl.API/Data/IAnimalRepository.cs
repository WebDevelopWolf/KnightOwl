using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KnightOwl.API.Models;

namespace KnightOwl.API.Data
{
    public interface IAnimalRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Animal>> GetAnimalList(int classification);
        Task<Module> GetAnimal(int id);
    }
}