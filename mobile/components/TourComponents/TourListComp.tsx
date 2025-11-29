import { View, Text } from '@/components/Themed';
import { TourListItemProps } from './TourListComp.config';
import getStyles from './TourListComp.styles';
import { useColorScheme } from '@/components/useColorScheme';
import { STAR } from '@/constants/Symbols';

export default function TourListItem({ title, author, rating }: TourListItemProps) {
  const theme = useColorScheme() ?? 'light';
  const styles = getStyles(theme);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>by {author}</Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.rating}>
            {STAR}
            {rating}
          </Text>
        </View>
      </View>
    </View>
  );
}
