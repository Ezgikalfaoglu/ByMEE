import { Image, StyleSheet } from 'react-native';

/**
 * Beemy mascot, exported from the Figma component "Beemy/Düşünüyor" (72 × 63, lavender #9B7BEA).
 * Only the moods this feature needs live here; a shared mascot component can replace it later.
 */
export type MascotMood = 'dusunuyor';

const images: Record<MascotMood, number> = {
  dusunuyor: require('../assets/beemy-dusunuyor.png'),
};

export function BeemyMascot({ mood, accessibilityLabel }: { mood: MascotMood; accessibilityLabel: string }) {
  return (
    <Image
      source={images[mood]}
      style={styles.image}
      resizeMode="contain"
      accessible
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel}
    />
  );
}

const styles = StyleSheet.create({
  image: { width: 72, height: 63 },
});
