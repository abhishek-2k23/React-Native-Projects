import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Suggested from '../suggested'
import Liked from '../liked'
import Library from '../library'

const Tab = createMaterialTopTabNavigator();
export default function ForYouTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name='Suggested' component={Suggested} />
      <Tab.Screen name='Liked' component={Liked} />
      <Tab.Screen name='Library' component={Library} />

    </Tab.Navigator>
  )
}
