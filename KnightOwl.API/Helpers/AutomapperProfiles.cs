using AutoMapper;
using KnightOwl.API.Dtos;
using KnightOwl.API.Models;

namespace KnightOwl.API.Helpers
{
    public class AutomapperProfiles : Profile
    {
        public AutomapperProfiles()
        {
            CreateMap<Module, ModulesForNavDto>();
            CreateMap<Module, ModulesForSubNavDto>();
            CreateMap<ModuleLink, ModuleLinksForNavDto>();
        }
    }
}