import  React  from 'react';
import {View,TextInput,Button} from 'react-tutorial';
import { Formik } from 'formik';
import Postlist from './posts/postslist'

 {
  <view style={{ marginTop:90}}>
    <Formik>
      initialValues={{name: ''}}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
      {formikProps => (
        <React.Fragment>
          <Text Input />
          style={{borderWidth: 1,borderColor: 'blue',marginBottom: 3}}
          onChangeText={formikProps.handleChange("name")}
          <Button title="Submit" onPress={formikProps.handleSubmit} />
      } 
        </React.Fragment>
      )}
    </Formik>
  </view>

}