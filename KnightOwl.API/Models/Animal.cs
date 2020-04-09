using System;

namespace KnightOwl.API.Models
{
    public class Animal
    {
        public int Id { get; set; } 
        public string Name { get; set; } 
        public string Nickname { get; set; } 
        public DateTime AdoptionDate { get; set; } 
        public DateTime DateOfBirth { get; set; } 
        public string Temperament { get; set; } 
        public AnimalCategory Classification { get; set; } 
        public string SpeciesName { get; set; } 
        public string SubSpeciesName { get; set; } 
        public string EnclosureName { get; set; } 
    }
}