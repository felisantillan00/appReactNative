import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de tener instalada la librería
import styles from '../../style/StyleStarRating';

const StarRating = ({ rating, setRating, style, isSubmitted }) => {
    return (
        <View style={[styles.ratingContainer, style]}>
            {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity 
                    key={star} 
                    onPress={() => {
                        if (!isSubmitted) {
                            setRating(star); // Establece la calificación
                        }
                    }} 
                    disabled={isSubmitted} // Deshabilita el botón si la calificación ha sido enviada
                >
                    <Icon
                        name={star <= rating ? 'star' : 'star-o'}
                        size={25}
                        color="#FFD700"
                    />
                </TouchableOpacity>
            ))}
            <Text style={styles.ratingText}>Calificación: {rating}</Text>
        </View>
    );
};
export default StarRating;

// const StarRating = ({ rating, setRating, style, isSubmitted }) => {
//     return (
//         <View style={[styles.ratingContainer, style]}>
//             {[1, 2, 3, 4, 5].map((star) => (
//                 <TouchableOpacity 
//                     key={star} 
//                     onPress={() => {
//                         if (!isSubmitted) {
//                             setRating(star); // Establece la calificación
//                         }
//                     }} 
//                     disabled={isSubmitted} // Deshabilita el botón si la calificación ha sido enviada
//                 >
//                     <Icon
//                         name={star <= rating ? 'star' : 'star-o'}
//                         size={30}
//                         color="#FFD700"
//                     />
//                 </TouchableOpacity>
//             ))}
//             <Text style={styles.ratingText}>Calificación: {rating}</Text>
//         </View>
//     );
// };
// export default StarRating;