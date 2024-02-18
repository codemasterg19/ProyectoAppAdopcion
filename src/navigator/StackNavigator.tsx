import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { FONT_COLOR, PRIMARY_COLOR } from '../commons/constantsColor';
import { RegisterScreen } from '../screens/RegisterScreen';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { PerfilScreen } from '../screens/HomeScreen/PerfilScreen';

//Data prueba
export interface User{
  id: number,
  cedula: string,
  email: string,
  password: string
}

const users:User[]=[
  {id:1, cedula:'1723437032', email:'jpjimenez@hotmail.com', password:'12345678'},
  {id:2, cedula:'1705802104',email:'darias@gmail.com', password:'00001111'}
]

const Stack = createStackNavigator();


export const StackNavigator=()=> {
  //Hook para controlar el estado de los usuarios registrados
  const [usersLogin, setUsersLogin]=useState(users);

  //Funcioón agregar un nuevo usuario en usersLogin
  const hadlerAddUser=(user: User)=>{
    setUsersLogin([...usersLogin, user])
  }



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions ={{

      
      tabBarActiveTintColor: '#3498DB', 
      tabBarInactiveTintColor: 'gray', 
   }}
  >
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Tab.Screen name="Settings" component={PerfilScreen} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}

  return (
    <Stack.Navigator screenOptions={{
        cardStyle:{
            backgroundColor:FONT_COLOR
        }
    }}>
      <Stack.Screen name="LoginScreen" options={{headerShown:false}} children={()=><LoginScreen users={usersLogin}/>} />
      <Stack.Screen name="RegisterScreen" options={{headerShown:false}} children={()=><RegisterScreen usersLogin={usersLogin} setUsersLogin={hadlerAddUser}/>} />
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
        {() => <MyTabs />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}