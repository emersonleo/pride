import { Component, OnInit } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalInfoComponent } from '../modal-info/modal-info.component';
import { constants } from '../constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit{

  constants = constants;
  comunity: any = [
    { SIGLA: 'L', DESCRICAO: 'LÉSBICAS são mulheres que sentem atração sexual/romântica por pessoas do mesmo gênero (mulheres/feminino).', TITULO: 'LÉSBICAS' },
    { SIGLA: 'G', DESCRICAO: 'GAYS são homens que sentem atração sexual/romântica por pessoas do mesmo gênero (homens/masculino).', TITULO: 'GAYS' },
    { SIGLA: 'B', DESCRICAO: 'BISSEXUAIS são pessoas que sentem atração sexual/romântica por mais de um gênero.', TITULO: 'BISSEXUAIS' },
    { SIGLA: 'T', DESCRICAO: 'TRANSEXUAIS são pessoas que não se identificam com o gênero atribuído em seu nascimento, isto é, a transexualidade se refere à identidade de gênero oposta ao sexo físico biológico, utilizado tanto para identidades masculinas (transmasculino), quanto femininas (transfeminina). A pessoa travesti, não necessariamente se identifica dentro do espectro binário de gênero (homem/mulher), mas também se trata de uma pessoa que não se reconhece com imposta no seu nacimento, além de ser um termo existente apenas nos países da América Latina e relacionado à marginalização. Travesti é uma expressão que traz representatividade e força, e seu pronome é sempre ELA.', TITULO: 'TRANSEXUAIS e TRAVESTIS' },
    { SIGLA: 'Q', DESCRICAO: 'QUEER são pessoas que não se identificam com os padrões de heteronormatividade impostos pela sociedade e transitam entre os “gêneros”, sem necessariamente concordar com tais rótulos.', TITULO: 'QUEER' },
    { SIGLA: 'I', DESCRICAO: 'INTERSEXUAIS são pessoas que possuem variações biológicas não binárias. Isto é, a intersexualidade está relacionada às características sexuais biológicas, diferente da orientação sexual ou da identidade de gênero. Uma pessoa intersexo pode ser hétero, gay, lésbica, bissexual ou assexual, e pode se identificar como mulher, homem, ambos ou nenhum.', TITULO: 'INTERSEXUAIS' },
    { SIGLA: 'A', DESCRICAO: 'ASSEXUAIS são pessoas com ausência total, parcial, condicional ou circunstancial de atração sexual. A assexualidade é um termo guarda-chuva que engloba arromânticos, românticos, homoromânticos, heteroromânticos, biromânticos, panromânticos, demissexuais, entre outros.', TITULO: 'ASSEXUAIS' },
    { SIGLA: 'P', DESCRICAO: 'PANSSEXUAIS são pessoas que possuem atração sexual/romântica por pessoas independentemente do sexo ou gênero das mesmas.', TITULO: 'PANSSEXUAIS' },
    { SIGLA: 'N', DESCRICAO: 'NÃO-BINÁRIE são pessoas que não se identificam no padrão binário de gênero. A não-binariedade é um termo guarda-chuva, e engloba as identidades e expressões de gênero que fogem ao binarismo, como por exemplo agênero, gênero fluido, entre outros.', TITULO: 'NÃO-BINÁRIE' },
    { SIGLA: '+', DESCRICAO: '+ é utilizado para incluir outros grupos e variações de gêneros e sexualidades, dado que a sigla está em constante mudança, como por exemplo a panssexualidade e a não', TITULO: 'DEMAIS IDENTIDADES E ORIENTAÇÕES' }
  ]

  typeSelected = constants.TYPETOSELECT.TEXTO;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {

  }

  openModal(letter: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = this.comunity.filter((x:any) => x.SIGLA == letter)
    const modalDialog = this.matDialog.open(ModalInfoComponent, dialogConfig);
  }

  selectedType(value: string){
    this.typeSelected = value;
  }
}
