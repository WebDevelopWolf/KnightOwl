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
            CreateMap<Animal, AnimalForListDto>()
                .ForMember(dest => dest.Classification, opt => opt.MapFrom(src => src.Classification.Name.ToString()))
                .ForMember(dest => dest.Age, opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
        }
    }
}