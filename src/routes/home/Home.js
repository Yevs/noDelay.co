/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import DelaySearch from '../../components/DelaySearch/DelaySearch';
import DelayData from '../../components/DelayData/DelayData';
import Map from '../../components/Map/Map';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

function Home({}) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <DelaySearch />
        <DelayData />
        <Map />
      </div>
    </div>
  );
}

Home.propTypes = {
  airports: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number,
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
  })).isRequired,
};

export default withStyles(Home, s);
