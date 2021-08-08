import React from 'react';
import { Result, Typography } from 'antd';

const { Text } = Typography;

const ResultComponent = () => {
  return (
    <Result
      status='success'
      title='Successfully Image uploaded'
      subTitle={
        <Text code>
          If you want, you can change some styles from the left side and you can see the results on
          the right side
        </Text>
      }
    />
  );
};

export default ResultComponent;
