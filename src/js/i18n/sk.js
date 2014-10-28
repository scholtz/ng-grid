/**
* Created by L007 on 2/1/14.
*/
(function () {
  angular.module('ui.grid').config(['$provide', function($provide) {
    $provide.decorator('i18nService', ['$delegate', function($delegate) {
      $delegate.add('sk', {
        aggregate: {
          label: 'items'
        },
        groupPanel: {
          description: 'Pretiahni sem názov stĺpca pre zoskupenie podľa toho stĺpca.'
        },
        search: {
          placeholder: 'Hľadaj...',
          showingItems: 'Zobrazujem položky:',
          selectedItems: 'Vybraté položky:',
          totalItems: 'Počet položiek:',
          size: 'Počet:',
          first: 'Prvá strana',
          next: 'Ďalšia strana',
          previous: 'Predchádzajúca strana',
          last: 'Posledná strana'
        },
        menu: {
          text: 'Vyberte stĺpce:'
        },
        sort: {
          ascending: 'Zotriediť vzostupne',
          descending: 'Zotriediť zostupne',
          remove: 'Vymazať triedenie'
        },
        aggregation: {
          count: 'počet záznamov: ',
          sum: 'suma: ',
          avg: 'priemer: ',
          min: 'min: ',
          max: 'max: '
        },
        pinning: {
        pinLeft: 'Pripnúť vľavo',
        pinRight: 'Pripnúť vpravo',
        unpin: 'Odopnúť'
        },
        gridMenu: {
          columns: 'Stĺpce:',
          importerTitle: 'Import súboru',
          exporterAllAsCsv: 'Export všetkých údajov do CSV',
          exporterVisibleAsCsv: 'Export zobrazených údajov do CSV',
          exporterSelectedAsCsv: 'Export vybratých údajov do CSV',
          exporterAllAsPdf: 'Export všetkých údajov do PDF',
          exporterVisibleAsPdf: 'Export zobrazených údajov do PDF',
          exporterSelectedAsPdf: 'Export vybratých údajov do PDF'
        },
        importer: {
          noHeaders: 'Názvy stĺpcov sa nepodarilo načítať. Má súbor hlavičku?',
          noObjects: 'Objekty sa nepodarilo načítať. Boli v súbore aj iné údaje ako hlavička?',
          invalidCsv: 'Súbor sa nepodarilo spracovať. Skontrolujte validitu CSV!',
          invalidJson: 'Súbor sa nepodarilo spracovať. Skontrolujte validitu JSON?',
          jsonNotArray: 'Súbor sa nepodarilo spracovať. Skontrolujte validitu JSON. JSON musí obsahovať pole.'
        }
      });
      return $delegate;
    }]);
  }]);
})();
