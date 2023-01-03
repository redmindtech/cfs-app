import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Html5Qrcode } from 'html5-qrcode';

@Component({
  selector: 'app-barcode-scanner-popup-loading',
  templateUrl: './barcode-scanner-popup.component.html',
  styleUrls: ['./barcode-scanner-popup.component.scss']
})
export class BarcodeScannerPopupComponent implements OnInit, OnDestroy {

  cameraFC = new FormControl();
  cameras: { id: string, label: string }[] = [];
  selectCameraLabel = 'Loading Camera...';
  scannedValue = '';
  html5QrCode: Html5Qrcode;
  constructor(
    public dialogRef: MatDialogRef<BarcodeScannerPopupComponent>,
  ) { }

  ngOnInit(): void {
    // This method will trigger user permissions
    Html5Qrcode.getCameras().then( devices => {
      /**
       * devices would be an array of objects of type:
       * { id: "id", label: "label" }
       */
      if (devices && devices.length) {
        this.selectCameraLabel = 'Select Camera'
        this.cameras = devices as any;
        this.cameraFC.setValue(this.getLastCamera(), {emitEvent: false});
        this.scan(this.cameraFC.value);
        // .. use this to start scanning.
      }
    }).catch(err => {
      // handle err
    });
    this.cameraFC.valueChanges.subscribe( id => {
      localStorage.setItem('lastUsedCameraId', id)
      this.scan(id);
      this.scannedValue = '';
    });
  }

  getLastCamera(): any {
    let id;
    try{
      id = localStorage.getItem('lastUsedCameraId');
    } catch (e) {
      
    }
    id = id ? id : this.cameras[0].id;
    return id; 
  }

  scan(cameraId: string): void {
    let offsetWidth = document.getElementById('scanner')?.offsetWidth ? document.getElementById('scanner')?.offsetWidth as any - 100 : innerWidth;
    let offsetHeight = document.getElementById('scanner')?.offsetHeight ? document.getElementById('scanner')?.offsetHeight as any - 100 : innerHeight;

    this.html5QrCode = new Html5Qrcode(/* element id */ "scanner", true);
    this.html5QrCode.start(
      cameraId, 
      {
        fps: 10,    // Optional, frame per seconds for qr code scanning
        qrbox: { width:  offsetWidth, height: offsetWidth }  // Optional, if you want bounded box UI
      },
      (decodedText, decodedResult) => {
        // do something when code is read
        this.scannedValue = decodedText;
        this.dialogRef.close(this.scannedValue);
      },
      (errorMessage) => {
        // parse error, ignore it.
        console.log(errorMessage)
      })
    .catch((err) => {
      // Start failed, handle it.
    });
  }

  ngOnDestroy(): void {
    this.html5QrCode.stop().then((ignore) => {
      // QR Code scanning is stopped.
    }).catch((err) => {
      // Stop failed, handle it.
    });
  }

}
