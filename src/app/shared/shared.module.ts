import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { MapModalComponent } from './map-modal/map-modal.component';
import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';
import { ImagePickerComponent } from './pickers/image-picker/image-picker.component';

@NgModule({
    declarations: [LocationPickerComponent, MapModalComponent, ImagePickerComponent],
    imports: [CommonModule, IonicModule],
    exports: [LocationPickerComponent, MapModalComponent],
    entryComponents: [MapModalComponent]
})
export class SharedModule {}