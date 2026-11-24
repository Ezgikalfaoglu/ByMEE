import { Image, StyleSheet } from 'react-native';

/**
 * Beemy mascot, exported from the Figma component "Beemy/Düşünüyor" with the mood
 * colour on (task and status screens). Only the moods this feature needs live here;
 * the shared <Mascot mood tinted /> component (BM-010, Melike) replaces it later.
 */
export type MascotMood = 'thinking';

const images: Record<MascotMood, number> = {
  thinking: require('../assets/beemy-thinking.png'),
};

/** Decorative by default (rule: "Decorative for screen readers unless the story gives a label"). */
export function BeemyMascot({ mood, width = 120, height = 105 }: { mood: MascotMood; width?: number; height?: number }) {
  return (
    <Image
      source={images[mood]}
      style={[styles.image, { width, height }]}
      resizeMode="contain"
      accessible={false}
      accessibilityElementsHidden
      importantForAccessibility="no"
    />
  );
}

const styles = StyleSheet.create({
  image: { width: 120, height: 105 },
});
