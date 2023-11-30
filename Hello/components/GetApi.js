import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TextInput, Button} from 'react-native';
import { styles } from './styles';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
const GetApi = () => {
  // const [data, setData] = useState([]);
  // const siteId = 1002;
  // const status = 'readyForInstall';
  // const getA = async () => {
  //   const url = `http://192.168.0.196:4000`;
  //   const result = await fetch(url);
  //   const json = await result.json();
  //   setData(json);
  // };

  // useEffect(() => {
  //   getA();
  // }, []);

  const [siteId, setSiteId] = useState('');
  const [alertStatus, setAlertStatus] = useState('');
const GET_ALERTS = gql`
query ($siteId: String!, $alertStatus: String!){
  filter(SiteId: $siteId, AlertStatus: $alertStatus) {
    OrderId
    SiteId
    Viewed
    Contacted
    Notes
    AlertStatus
    LastModified
    LastModifiedAssociate
    ReceivingSiteId
    AddressLine1
    AddressLine2
    WorkPhone
    Comment
    StoFlag
    SourcingDelays
    StoreCode
  }
}
`

var temp_siteId = "";
var temp_alertStatus = ""; 
const { loading, error, data } = useQuery(GET_ALERTS, {
  variables: { siteId, alertStatus },
});
const handleSearch = () => {
  setAlertStatus(temp_alertStatus);
  setSiteId(temp_siteId);
};
if (loading) return <Text>Loading...</Text>;
if (error) return <Text>Error: {error.message}</Text>;

  return (
    <ScrollView>
      <TextInput
        placeholder="SiteId"
        onChangeText={(text) => temp_siteId=text}
      />
      <TextInput
        placeholder="AlertStatus"
        onChangeText={(text) => temp_alertStatus=text}
      />
     <Button title="Search" onPress={handleSearch} />
      <Text style={{fontSize: 30, paddingLeft: 150}}>Alerts</Text>
      {data.filter.length
        ? data &&
          data.filter.map((item, index) => {
            //console.log(item);
            return (
              <View key={index}>
                <View style={styles.card}>
                  {/* <Text style={{fontSize:20}}>{item.id}</Text> */}
                  <Text style={styles.Snumber}>{item.OrderId}</Text>
                  <Text>SiteId{item.SiteId}</Text>
                  <Text>Viewed{item.Viewed}</Text>
                  <Text>Contacted{item.Contacted}</Text>
                  <Text>Notes{item.Notes}</Text>
                  <Text>AlertStatus{item.AlertStatus}</Text>
                  <Text>LastModified{item.LastModified}</Text>
                  <Text>LastModifiedAssociate{item.LastModifiedAssociate}</Text>
                  <Text>SourcingDelays{item.SourcingDelays}</Text>
                  <Text>StoFlag{item.StoFlag}</Text>
                  <Text>StoreCode{item.StoreCode}</Text>
                  <Text>Address {item.AddressLine1} {item.AddressLine2}</Text>
                  <Text>Comment{item.Comment}</Text>
                  <Text>ReceivingSiteId{item.ReceivingSiteId}</Text>
                  <Text>WorkPhone{item.WorkPhone}</Text>
                </View>
              </View>
            );
          })
        : <Text>Check your Entries</Text>}
    </ScrollView>
  );
};


export default GetApi;
