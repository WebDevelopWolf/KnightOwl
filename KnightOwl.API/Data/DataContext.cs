using KnightOwl.API.Models;
using Microsoft.EntityFrameworkCore;

namespace KnightOwl.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<ModuleLink> ModuleLinks { get; set; }
        public DbSet<Animal> Animals { get; set; }
        public DbSet<AnimalCategory> AnimalCategories { get; set; }
    }
}