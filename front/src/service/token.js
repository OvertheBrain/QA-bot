import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';
var storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});
// ćšć±ćé
global.storage = storage;
