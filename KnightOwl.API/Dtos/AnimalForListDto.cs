using System;
using KnightOwl.API.Models;

namespace KnightOwl.API.Dtos
{
    public class AnimalForListDto
    {
        public int Id { get; set; } 
        public string Name { get; set; } 
        public string Nickname { get; set; } 
        public DateTime AdoptionDate { get; set; } 
        public int Age { get; set; } 
        public string Temperament { get; set; } 
        public string Classification { get; set; } 
        public string SpeciesName { get; set; } 
        public string SubSpeciesName { get; set; } 
        public string EnclosureName { get; set; } 
    }
}