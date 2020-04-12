import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  inputValue: string = "";

  constructor(private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController) { }

  async showModal() {
    const modal = this.modalController.create({
      component: SettingsComponent,
      componentProps: {
        data: this.inputValue
      }
    });
    await (await modal).present();
  }

  async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Pizza',
        role: 'destructive',
        icon: 'pizza-outline',
        handler: () => {
          alert("Want to eat Pizza...");
        }
      }, {
        text: 'Radio',
        icon: 'radio-outline',
        handler: () => {
          alert("Listen to a radio...");
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          alert("What are your hobbies ?");
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
