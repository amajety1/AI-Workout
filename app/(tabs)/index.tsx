import { StyleSheet, TouchableOpacity, StatusBar, View as RNView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from '@/components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabOneScreen() {
  return (
    <RNView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#000000', '#001F3F', '#006064']}
        style={styles.gradient}
      >
        {/* Navbar */}
        <View style={styles.navbar}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.navIcons}>
            <TouchableOpacity style={styles.navIcon}>
              <MaterialCommunityIcons name="bell" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navIcon}>
              <MaterialCommunityIcons name="share-variant" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navIcon}>
              <MaterialCommunityIcons name="magnify" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <View style={styles.headerContainer}>
            <Text style={styles.subtitle}>THE LONG WAIT IS OVER</Text>
            <Text style={styles.title}>Your final fitness{'\n'}destination</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.signUpButton]}>
              <Text style={[styles.buttonText, styles.signUpButtonText]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </RNView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  gradient: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  navIcons: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  navIcon: {
    marginLeft: 25,
  },
  mainContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  headerContainer: {
    backgroundColor: 'transparent',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
    letterSpacing: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 45,
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    gap: 15,
    marginTop: 40,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  signUpButtonText: {
    color: '#ffffff',
  },
});
