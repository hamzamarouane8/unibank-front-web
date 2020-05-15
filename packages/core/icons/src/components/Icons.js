import React from 'react';
import {
  FiMoreVertical, FiUsers,
  FiPlus, FiTrash2, FiEdit2,
  FiMapPin,
  FiLock,
  FiLifeBuoy,
  FiSearch,
  FiPhone,
  FiLayers,
  FiCalendar,
  FiFilter
} from 'react-icons/fi';
import { Sizes } from '@sgabskit/constants';
import { TiExport } from 'react-icons/ti';
import {
  MdClose,
  MdGroup,
  MdPayment,
  MdPictureAsPdf,
  MdFileDownload,
  MdDirectionsCar,
  MdDirectionsWalk
} from 'react-icons/md';

const SIZE_MAPPING = {
  [Sizes.XXS]: 12,
  [Sizes.XS]: 14,
  [Sizes.SM]: 16,
  [Sizes.MD]: 24,
  [Sizes.LG]: 32,
  [Sizes.XL]: 48,
  [Sizes.XXL]: 64,
};

const icon = (Component) => {
  return (props) => {
    const size = Sizes.fromProps(props || {});
    return <Component size={SIZE_MAPPING[size] || 16}/>;
  };
};

export const IcMoreVertical = icon(FiMoreVertical);

export const IcClose = icon(MdClose);

export const IcCar = icon(MdDirectionsCar);

export const IcDirectionWalk = icon(MdDirectionsWalk);

export const IcAdd = icon(FiPlus);

export const IcPlus = IcAdd;

export const IcTrash = icon(FiTrash2);

export const IcEdit = icon(FiEdit2);

export const IcUsers = icon(FiUsers);

export const IcUsersFilled = icon(MdGroup);

export const IcMapPin = icon(FiMapPin);

export const IcLock = icon(FiLock);

export const IcPayment = icon(MdPayment);

export const IcHealth = icon(FiLifeBuoy);

export const IcSearch = icon(FiSearch);

export const IcPhone = icon(FiPhone);

export const IcPdf = icon(MdPictureAsPdf);

export const IcExport = icon(TiExport);

export const IcDownload = icon(MdFileDownload);

export const IcStack = icon(FiLayers);

export const IcCalendar = icon(FiCalendar);

export const IcFilter = icon(FiFilter);


