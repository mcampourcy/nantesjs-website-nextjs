import { isValid, parse } from 'date-fns'
import { fr } from 'date-fns/locale'

export function parseMeetupDate (dateString) {
    const date = parse(dateString, 'dd/MM/yyyy', new Date(), { locale: fr })

    return isValid(date) ? date : null
}
