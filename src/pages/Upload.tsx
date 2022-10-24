import { Button, Center, Flex, Image } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
const MAX_SIZE = 5242880;

function Upload() {
  const [filesPreview, setFilesPreview] = useState<any>([]);
  const [currentFile, setCurrentFile] = useState(0);

  let url: any = '';

  if (filesPreview.length) {
    url = URL.createObjectURL(filesPreview[currentFile]);
  }

  const handleBack = () => {
    setCurrentFile((prev: any) => {
      const newValue = prev - 1 > -1 ? prev - 1 : 0;
      return newValue;
    });
  };

  const handleNext = () => {
    setCurrentFile((prev: any) => {
      const newValue = prev + 1 < filesPreview.length ? prev + 1 : 0;
      console.log(
        '%c [ newValue ]-31',
        'font-size:13px; background:#06EE8D; color:#2f3656;',
        newValue,
      );
      return newValue;
    });
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    setFilesPreview((prev: any) => {
      return [...prev, ...acceptedFiles];
    });
    // Do something with the files
  }, []);

  const onDropRejected = useCallback((rejectedFiles: any) => {
    console.log('Archivos no aceptados', rejectedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    noClick: false,
    multiple: true,
    maxFiles: 10,
    accept: {
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg'],
      'image/png': ['.png'],
    },
    maxSize: MAX_SIZE,
  });

  return (
    <Flex flexDirection='column' width={{ base: '100%' }}>
      <Center
        marginY={{ base: '40px' }}
        border='3px dashed'
        borderColor={{ base: 'ceruleanBlue' }}
        width={{ base: '100%' }}
        height={{ base: '100px' }}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Suelta los archivos aquí...</p>
        ) : (
          <p>Arrastre y suelte algunos archivos aquí, o haga clic para seleccionar archivos</p>
        )}
      </Center>
      <Flex
        width={{ base: '100%' }}
        alignItems={{ base: '100%' }}
        flexDirection='column'
        justifyContent={{ base: 'center' }}
      >
        <Flex alignItems={{ base: 'center' }} marginX='auto' marginBottom={{ base: '40px' }}>
          <Button onClick={handleBack} marginX={{ base: '16px' }}>
            Atrás
          </Button>
          <Flex fontSize={{ base: '40px' }}>{`${currentFile ? currentFile + 1 : 0} / ${
            filesPreview.length
          }`}</Flex>
          <Button onClick={handleNext} marginX={{ base: '16px' }}>
            Siguinete
          </Button>
        </Flex>
        <Flex marginX='auto'>
          {!!url && <Image boxSize={{ base: '400px' }} src={url} alt={'$-img'} />}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Upload;
