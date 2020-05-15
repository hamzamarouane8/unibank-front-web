import React, {useEffect, useRef, useState} from 'react';
import Button from '@sgabskit/button'
import isEmpty from 'lodash.isempty'
import {Icon, Input, Menu} from 'semantic-ui-react'
import {BRANCH_ATM, BRANCH_BRANCH} from '../../components/commons/Constants'
import classnames from 'classnames';
import {ButtonFilter, Item, Search, SidebarButton, SidebarStyle} from './assets/styles/sidebar'
//-----------------------------------------------------------------

const ICONS = {
  atm_icon: require('../../assets/img/DAB_icon.svg'),
  branch_icon: require('../../assets/img/Agencey_icon.svg'),
  atm1_icon: require('../../assets/img/DAB Dispo.svg'),
  icon_right: require('../../assets/img/icon-arrow_toright.svg')

}

export default ({markers, activeBranches, activeAtms, filterMarkers, selectedMarker}) => {
  const [filtered, setFiltered] = useState(markers);
  const [filtre, setFiltre] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else if (mounted.current && !filtre) {
      setFiltered(markers);
      setFiltre(false);
    }
  });

  const handleChange = (e) => {
    let currentList = [];
    let newList = [];
    newList = markers;
    if (!isEmpty(e.target.value)) {
      currentList = markers;
      newList = currentList.filter(item => {
        let filters = {'title':'','description':''}
        return Object.keys(filters).some(key =>item[key].toLowerCase().includes(e.target.value.toString().toLowerCase())
        );
      });
    }
    setFiltered([...newList])
    setFiltre(true);
  }

  const filter = (type) => {
    filterMarkers(type);
    setFiltre(false);
  }

  const handleItemClick = (item) => {
    selectedMarker(item);
  }

  const hideSidebar = () => {
    setIsOpen(!isOpen);
  }

  //------ RETURN --------//
  return (
    <SidebarStyle id={classnames(`clearfix sidebar__branches`)}>
      <div className={`layout-sidebar-visible ${!isOpen && "layout-sidebar-collapsed layout-sidebar-offscreen"}`}>
        <div className="ui-filtre">
          <Search iconPosition='left' placeholder='Rechercher ...' onChange={(e) => handleChange(e)}>
            <Icon name='search'/>
            <input/>
          </Search>
          <ButtonFilter icon={activeBranches && 'checkmark'} active={activeBranches}
                        onClick={() => filter(BRANCH_BRANCH)}>Agences</ButtonFilter>
          <ButtonFilter icon={activeAtms && 'checkmark'} active={activeAtms}
                        onClick={() => filter(BRANCH_ATM)}>DAB</ButtonFilter>
        </div>
        <div style={{height:'100%',overflow: 'hidden',position: 'relative'}}>
          <Menu pointing secondary vertical>
            {(filtered || []).map((item, index) => {
              return (
                <Item key={index} onClick={() => handleItemClick(item)}>
                  <div onClick={item.onClick} className="branch-item">
                    <div className="adress-content">
                      <div className="item-content img">
                        <img alt="" src={item.id.startsWith(BRANCH_ATM) ? ICONS.atm_icon : ICONS.branch_icon}/>
                      </div>
                      <div className="item-content text">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                      <div className="item-content details" style={{padding: '0'}}>
                        <p>{item.distanceWalking && item.distanceWalking}</p>
                      </div>
                    </div>
                  </div>
                </Item>
              )
            })}
          </Menu>
        </div>
      </div>
      <SidebarButton id={classnames('clearfix sidebar__collapse')}
                     className={`layout-sidebar-toggle ${!isOpen && "collapsed"}`}>
        <Button className={`${!isOpen && "collapsed-mode"}`} onClick={() => hideSidebar()}><img src={ICONS.icon_right}
                                                                                                alt=""/></Button>
      </SidebarButton>
    </SidebarStyle>
  )
}

