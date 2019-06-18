import { addLocaleData } from "react-intl";

import enLocaleData from "react-intl/locale-data/en";
import deLocaleData from "react-intl/locale-data/de";
import ruLocaleData from "react-intl/locale-data/ru";

export const localeData = [enLocaleData, deLocaleData, ruLocaleData];

export const addAppLocaleData = () =>
  localeData.forEach(locale => addLocaleData(locale));
