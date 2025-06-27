/**
 * Servicio para manejar información de países
 * Incluye códigos telefónicos y datos para el componente PhoneInput
 */

class CountryService {
  constructor() {
    this.countries = [
      {
        code: 'CL',
        name: 'Chile',
        phoneCode: '+56',
        flag: '🇨🇱'
      },
      {
        code: 'AR',
        name: 'Argentina',
        phoneCode: '+54',
        flag: '🇦🇷'
      },
      {
        code: 'BR',
        name: 'Brasil',
        phoneCode: '+55',
        flag: '🇧🇷'
      },
      {
        code: 'PE',
        name: 'Perú',
        phoneCode: '+51',
        flag: '🇵🇪'
      },
      {
        code: 'CO',
        name: 'Colombia',
        phoneCode: '+57',
        flag: '🇨🇴'
      },
      {
        code: 'MX',
        name: 'México',
        phoneCode: '+52',
        flag: '🇲🇽'
      },
      {
        code: 'US',
        name: 'Estados Unidos',
        phoneCode: '+1',
        flag: '🇺🇸'
      },
      {
        code: 'CA',
        name: 'Canadá',
        phoneCode: '+1',
        flag: '🇨🇦'
      },
      {
        code: 'ES',
        name: 'España',
        phoneCode: '+34',
        flag: '🇪🇸'
      },
      {
        code: 'FR',
        name: 'Francia',
        phoneCode: '+33',
        flag: '🇫🇷'
      },
      {
        code: 'IT',
        name: 'Italia',
        phoneCode: '+39',
        flag: '🇮🇹'
      },
      {
        code: 'DE',
        name: 'Alemania',
        phoneCode: '+49',
        flag: '🇩🇪'
      },
      {
        code: 'GB',
        name: 'Reino Unido',
        phoneCode: '+44',
        flag: '🇬🇧'
      },
      {
        code: 'JP',
        name: 'Japón',
        phoneCode: '+81',
        flag: '🇯🇵'
      },
      {
        code: 'KR',
        name: 'Corea del Sur',
        phoneCode: '+82',
        flag: '🇰🇷'
      },
      {
        code: 'CN',
        name: 'China',
        phoneCode: '+86',
        flag: '🇨🇳'
      },
      {
        code: 'IN',
        name: 'India',
        phoneCode: '+91',
        flag: '🇮🇳'
      },
      {
        code: 'AU',
        name: 'Australia',
        phoneCode: '+61',
        flag: '🇦🇺'
      }
    ]

    // Ordenar países por nombre
    this.countries.sort((a, b) => a.name.localeCompare(b.name, 'es'))
  }

  /**
   * Obtiene todos los países disponibles
   * @returns {Array} Lista de países
   */
  getAllCountries() {
    return this.countries
  }

  /**
   * Busca un país por su código
   * @param {string} code - Código del país (ej: 'CL', 'US')
   * @returns {Object|null} País encontrado o null
   */
  getCountryByCode(code) {
    return this.countries.find(country => country.code === code) || null
  }

  /**
   * Busca un país por su código telefónico
   * @param {string} phoneCode - Código telefónico (ej: '+56', '+1')
   * @returns {Object|null} País encontrado o null
   */
  getCountryByPhoneCode(phoneCode) {
    return this.countries.find(country => country.phoneCode === phoneCode) || null
  }

  /**
   * Busca países que coincidan con el término de búsqueda
   * @param {string} searchTerm - Término de búsqueda
   * @returns {Array} Lista de países que coinciden
   */
  searchCountries(searchTerm) {
    if (!searchTerm) {
      return this.countries
    }

    const term = searchTerm.toLowerCase()
    return this.countries.filter(country => 
      country.name.toLowerCase().includes(term) ||
      country.code.toLowerCase().includes(term) ||
      country.phoneCode.includes(term)
    )
  }

  /**
   * Obtiene el país por defecto (Chile)
   * @returns {Object} País por defecto
   */
  getDefaultCountry() {
    return this.getCountryByCode('CL') || this.countries[0]
  }

  /**
   * Valida un número telefónico básico
   * @param {string} phoneNumber - Número a validar
   * @param {Object} country - País seleccionado
   * @returns {Object} Resultado de validación
   */
  validatePhoneNumber(phoneNumber, country) {
    const result = {
      isValid: false,
      message: '',
      formattedNumber: ''
    }

    if (!phoneNumber || !country) {
      result.message = 'Número y país son requeridos'
      return result
    }

    // Remover espacios y caracteres especiales excepto números
    const cleanNumber = phoneNumber.replace(/[^\d]/g, '')

    if (cleanNumber.length < 8) {
      result.message = 'El número debe tener al menos 8 dígitos'
      return result
    }

    if (cleanNumber.length > 15) {
      result.message = 'El número no puede tener más de 15 dígitos'
      return result
    }

    // Validaciones específicas por país
    const validationRules = this.getValidationRules(country.code)
    if (validationRules && !validationRules.pattern.test(cleanNumber)) {
      result.message = validationRules.message
      return result
    }

    result.isValid = true
    result.formattedNumber = this.formatPhoneNumber(cleanNumber, country)
    return result
  }

  /**
   * Obtiene reglas de validación específicas por país
   * @param {string} countryCode - Código del país
   * @returns {Object|null} Reglas de validación
   */
  getValidationRules(countryCode) {
    const rules = {
      'CL': {
        pattern: /^[2-9]\d{7,8}$/,
        message: 'Número chileno inválido (ej: 987654321)'
      },
      'AR': {
        pattern: /^[1-9]\d{7,9}$/,
        message: 'Número argentino inválido'
      },
      'US': {
        pattern: /^[2-9]\d{9}$/,
        message: 'Número estadounidense inválido (10 dígitos)'
      },
      'MX': {
        pattern: /^[1-9]\d{9}$/,
        message: 'Número mexicano inválido (10 dígitos)'
      }
    }

    return rules[countryCode] || null
  }

  /**
   * Formatea un número telefónico según el país
   * @param {string} number - Número limpio
   * @param {Object} country - País seleccionado
   * @returns {string} Número formateado
   */
  formatPhoneNumber(number, country) {
    // Formateo básico, se puede expandir según necesidades
    switch (country.code) {
      case 'CL':
        if (number.length === 9) {
          return `${number.slice(0, 1)} ${number.slice(1, 5)} ${number.slice(5)}`
        }
        return number
      case 'US':
      case 'CA':
        if (number.length === 10) {
          return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6)}`
        }
        return number
      default:
        return number
    }
  }

  /**
   * Combina código de país con número local
   * @param {Object} country - País seleccionado
   * @param {string} localNumber - Número local
   * @returns {string} Número completo internacional
   */
  getFullPhoneNumber(country, localNumber) {
    if (!country || !localNumber) {
      return ''
    }

    const cleanNumber = localNumber.replace(/[^\d]/g, '')
    return `${country.phoneCode} ${cleanNumber}`
  }
}

// Exportar instancia única (Singleton)
export const countryService = new CountryService() 