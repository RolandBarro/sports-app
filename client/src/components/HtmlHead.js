import React, { 
  forwardRef,
  useImperativeHandle,
} from 'react';

import Head from 'next/head'

export default class HtmlHead extends React.Component {  
  constructor (props) {
    super (props);

    this.state = {
      pageTitle: '',
    }
  }

  changePageTitle () {
    const title = 'test';
    console.log('title: ', title);

    this.setState({
      pageTitle: title || '',
    });
  }

  render () {
    let { pageTitle } = this.state;
    pageTitle = pageTitle ? `${pageTitle} | ` : '';

    forwardRef((props, ref) => {
      console.log('ref: ', ref);
      return useImperativeHandle(ref, () => {
        this.changePageTitle();
      });
    });

    return (
      <div>
        <Head>
          <title> {`${pageTitle}`} TeamUp &copy;</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      </div>
    );
  }
}
