import { useContext } from 'react';
import { Document, PDFViewer } from '@react-pdf/renderer';
import Resume from './Resume';
import { FormikContext } from '../../context/FormikState';

const Template = ({ theme }) => {
  const {
    firstname,
    lastname,
    address,
    contact,
    details,
    personalskills,
    personalstatement,
    photo,
    education,
    languages,
    work,
    techskills
  } = useContext(FormikContext);

  return (
    <>
      <PDFViewer>
        <Document>
          <Resume
            size='A4'
            theme={theme}
            firstname={firstname}
            lastname={lastname}
            contact={contact}
            photo={photo}
            address={address}
            education={education}
            work={work}
            details={details}
            personalskills={personalskills}
            languages={languages}
            techskills={techskills}
            personalstatement={personalstatement}
          />
        </Document>
      </PDFViewer>
    </>
  );
};

export default Template;
