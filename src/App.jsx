import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getEvents from './components/utilities'
import Calendar from 'react-calendar'
import { Center, Heading, VStack } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)
  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents().then((events) => setEvents(events.data["events"]))
  }, [])

  //https://github.com/HackIllinois/site-2021/blob/master/src/pages/Schedule/EventDisplay/Events.tsx
  const formatAMPM = (dateinms) => {
    let date = new Date(dateinms);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours < 12 ? 'AM' : 'PM';
    hours %= 12;
    hours = hours || 12;
    const mins = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${mins} ${ampm}`;
    return strTime;
  };

  const getRange = (start, end) => {
    if (start === end) {
      return formatAMPM(start*1000);
    }
    return `${formatAMPM(start*1000)} - ${formatAMPM(end*1000)}`;
  }

  const getDay = (dateinms) => {
    let date = new Date(dateinms);
    let day = date.getDate();
    return date.toLocaleString('default', { month: 'long' }) + " " + day;
  }

  const getDayID = (dateinms) => {
    let date = new Date(dateinms);
    let day = date.getDate();
    return date.toLocaleString('default', { month: 'long' }) + day;
  }
  return (
    <>
      {/* <div>
        <Calendar 
        // defaultActiveStartDate={new Date(2021, 3, 9)} 
        defaultValue={[new Date(2023, 1, 25), new Date(2023, 1, 26)]}
        />
      </div> */}
      <br />

      <Tabs>
        <TabList>
          <Tab >Friday (February 24th)</Tab>
          <Tab>Saturday (February 25th)</Tab>
          <Tab>Sunday (February 26th)</Tab>
        </TabList>
      </Tabs>     
      <br />
       <div>
        <VStack>
            {events?.map((event) => (
              <Center>
              <div id={getDayID(event.startTime*1000)}>
                <Card maxW='md' minW='md' variant='filled'>
                  <CardHeader size='md'>
                    <Heading size='md'>{event.name}</Heading>
                  </CardHeader>

                  <CardBody>
                      <Text>
                        {getDay(event.startTime*1000)}
                        <br />
                        
                        {getRange(event.startTime, event.endTime)}
                        <br />
                        {event.description} 
                        
                      </Text>
                  </CardBody>
                </Card>
                <br />
              </div>
              </Center>
          ))}
        </VStack>
      </div>
      
    </>
  )
}

export default App
