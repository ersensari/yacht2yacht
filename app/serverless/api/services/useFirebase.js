import { collection, getDocs, getFirestore } from 'firebase/firestore/lite'
import app from './firebase'

export function useFirebase() {
  const db = getFirestore(app)

  const getTest = async () => {
    const citiesCol = collection(db, 'test')
    const citySnapshot = await getDocs(citiesCol)
    const cityList = citySnapshot.docs.map((doc) => doc.data())
    return cityList
  }

  return { getTest }
}
