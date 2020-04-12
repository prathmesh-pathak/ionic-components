import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @Input() data: any;
  constructor(private modalController: ModalController,
    private actionSheetController: ActionSheetController) { }

  async close() {
    await this.modalController.dismiss();
  }

  ngOnInit() { }

}
