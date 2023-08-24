import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div className='accordion'>
      <Accordion className='accordion-box'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is Bookmark?</Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion-content'>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion-box'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can I request a new browser?</Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion-content'>
          <Typography>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
            Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
            ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
            Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion-box'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Is there a mobile app?</Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion-content'>
          <Typography>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
            urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
            sollicitudin ex et ultricies bibendum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion-box'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>What about other Chromium browsers?</Typography>
        </AccordionSummary>
        <AccordionDetails className='accordion-content'>
          <Typography>
                Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                vitae neque eget nisl gravida pellentesque non ut velit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
