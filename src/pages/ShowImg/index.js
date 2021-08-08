import React, { useState } from 'react';

import 'antd/dist/antd.css';
import { Upload, Button, Modal, Divider, Card } from 'antd';

import { Slider } from 'antd';
import { Container, WrapperImages, Flex, WraperStyles, NewImage } from './styles';
import ResultComponent from '../../components/ResultComponent/ResultComponent';
import RightSide from './RightSide/RightSide';

const ShowImg = () => {
  const [fileList, setFileList] = useState([]);
  const [imageToShow, setImageToShow] = useState('');
  const [showIMage, setShowIMage] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  const [traslateX, setTraslateX] = useState(0);
  const [traslateY, setTraslateY] = useState(0);

  const [preview, setPreview] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
  });

  const onChange = ({ fileList, file }) => {
    setImageToShow(file);
    setFileList(fileList);
  };

  const onPreview = async (file) => {
    console.log(file, 'file');
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreview({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  const showImageHandler = () => {
    setShowIMage(!showIMage);
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  return (
    <Container>
      <Upload
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        listType='picture-card'
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}>
        {fileList.length < 5 && '+ Upload'}
      </Upload>

      <Modal
        visible={preview.previewVisible}
        title={preview.previewTitle}
        footer={null}
        onCancel={() => setPreview({ previewVisible: false })}>
        <img alt='example' style={{ width: '100%' }} src={preview.previewImage} />
      </Modal>

      <Button type='primary' onClick={showImageHandler} disabled={!fileList.length && true}>
        {!showIMage ? 'Show Image' : 'Hide Image'}
      </Button>
      <Divider>Pictures</Divider>
      {showIMage && (
        <WrapperImages>
          <Flex>
            <Card hoverable title='No modifications'>
              <img src={imageToShow?.thumbUrl} alt='' />
              <WraperStyles>
                Opacity:
                <Slider
                  defaultValue={1}
                  tooltipVisible
                  onChange={(value) => setOpacity(value)}
                  min={0}
                  max={1}
                  step={0.01}
                />{' '}
                <Divider />
                Rotate Image:
                <Slider
                  defaultValue={0}
                  tooltipVisible
                  onChange={(value) => setRotate(value)}
                  min={0}
                  max={360}
                  step={1}
                />{' '}
                <Divider />
                Scale Image:
                <Slider
                  defaultValue={1}
                  tooltipVisible
                  onChange={(value) => setScale(value)}
                  min={0}
                  max={5}
                  step={1}
                />{' '}
                <Divider />
                Traslate Image axis X:
                <Slider
                  defaultValue={0}
                  tooltipVisible
                  onChange={(value) => setTraslateX(value)}
                  min={-50}
                  max={50}
                  step={1}
                />{' '}
                <Divider />
                Traslate Image axis Y:
                <Slider
                  defaultValue={0}
                  tooltipVisible
                  onChange={(value) => setTraslateY(value)}
                  min={-50}
                  max={50}
                  step={1}
                />{' '}
                <Divider />
              </WraperStyles>
            </Card>
          </Flex>
          <ResultComponent />

          <RightSide
            opacity={opacity}
            rotate={rotate}
            scale={scale}
            traslateX={traslateX}
            traslateY={traslateY}
            imageToShow={imageToShow}
            WraperStyles={WraperStyles}
            NewImage={NewImage}
          />
        </WrapperImages>
      )}
    </Container>
  );
};

export default ShowImg;
