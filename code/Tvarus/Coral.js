import React, { useEffect,useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Sample data structure to associate species with habitats
const speciesAndHabitats = [
    { species: 'Dolphin', habitat: 'Ocean' },
    { species: 'Sea Turtle', habitat: 'Coral Reef' },
    { species: 'Orca (Killer Whale)', habitat: 'Open Ocean' },
    { species: 'Jellyfish', habitat: 'Open Ocean' },
    { species: 'Octopus', habitat: 'Rocky Seafloor' },
    { species: 'Shark', habitat: 'Pelagic Zone' },
    { species: 'Seahorse', habitat: 'Seagrass Beds' },
    { species: 'Manatee (Sea Cow)', habitat: 'Shallow Coastal Waters' },
    { species: 'Penguin', habitat: 'Polar Regions' },
    { species: 'Clownfish', habitat: 'Anemone' },
    { species: 'Giant Pacific Octopus', habitat: 'Kelp Forests' },
    { species: 'Manta Ray', habitat: 'Coral Reefs' },
  ]; 

  const Coral = () => {
    const [speciesCards, setSpeciesCards] = useState(
      speciesAndHabitats.map(() => ({ flipped: false }))
    );
    const [habitatCards, setHabitatCards] = useState(
      speciesAndHabitats.map(() => ({ flipped: false }))
    );
    const [shuffledHabitats, setShuffledHabitats] = useState([]);
  
    const [selectedSpeciesIndex, setSelectedSpeciesIndex] = useState(null);
  
    useEffect(() => {
      // Randomize the order of species cards
      const shuffledSpeciesCards = speciesAndHabitats.map(() => ({ flipped: false }));
      shuffledSpeciesCards.sort(() => Math.random() - 0.5);
      setSpeciesCards(shuffledSpeciesCards);
  
      // Randomize the order of habitat cards
      const habitats = speciesAndHabitats.map((item) => item.habitat);
      habitats.sort(() => Math.random() - 0.5);
      setShuffledHabitats(habitats);
    }, []);
  
    const handleSpeciesCardPress = (index) => {
      if (selectedSpeciesIndex === null) {
        const updatedCards = [...speciesCards];
        updatedCards[index].flipped = true;
        setSelectedSpeciesIndex(index);
        setSpeciesCards(updatedCards);
      }
    };
  
    const handleHabitatCardPress = (index) => {
      if (selectedSpeciesIndex !== null) {
        const updatedCards = [...habitatCards];
        updatedCards[index].flipped = true;
        setHabitatCards(updatedCards);
  
        const selectedSpecies = speciesAndHabitats[selectedSpeciesIndex];
        const selectedHabitat = shuffledHabitats[index]; // Use the shuffled order of habitats
  
        if (selectedSpecies.habitat === selectedHabitat) {
          alert('Matched!');
        } else {
          alert('Not a match!');
        }
        setSelectedSpeciesIndex(null);
      }
    };
  
    return (
      <ScrollView>
      <Text style={styles.text}> To play this game, match each animal(tile on the right) to their respective habitats. Remember to click an animal before you assign it an habitat</Text>

        <View style={styles.container}>
       
          <View style={styles.cardContainer}>
          <Text style={styles.text}> ANIMAL</Text>
            {speciesCards.map((card, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => handleSpeciesCardPress(index)}
              >
                <Text style={card.flipped ? styles.cardContent : styles.cardBack}>
                  {card.flipped ? speciesAndHabitats[index].species : 'Click to reveal'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
  
          <View style={styles.cardContainer}>
          <Text style={styles.text}>  HABITAT </Text>
            {shuffledHabitats.map((habitat, index) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                onPress={() => handleHabitatCardPress(index)}
              >
                <Text style={styles.cardContent}>{habitat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  };
  
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    width: 80,
    height: 120,
    margin: 5,
    backgroundColor: '#6082B6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cardContent: {
    fontSize: 16,
    color:'black',
  },
  cardBack: {
    fontSize: 12,
    color:'black',
    
  },
  text:{
    fontFamily: 'Times New Roman',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Coral;
