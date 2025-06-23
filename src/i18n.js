import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import childrenUz from 'entities/targetItems/ui/children/uz.json';
import childrenRu from 'entities/targetItems/ui/children/ru.json';






const resources = {
    uz: {
        translation: {
            children: childrenUz
        }
    },
    ru: {
        translation: {
            children: childrenRu
        }
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "uz", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        fallbackLng: 'uz',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });



export default i18n;
