(self.webpackChunkcfs=self.webpackChunkcfs||[]).push([[366],{366:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CargoDeliveryModule:()=>ue});var o=i(8583),n=i(4655),a=i(3679),l=i(5203),s=i(7716),r=i(1095),c=i(2238);let d=(()=>{class e{constructor(){}ngOnInit(){}ok(){window.location.reload()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-delivery-fail-status"]],decls:3,vars:0,consts:[[1,"d-flex","pb-1"],["mat-raised-button","","mat-dialog-close","",1,"ml-auto",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"button",1),s.NdJ("click",function(){return t.ok()}),s._uU(2,"Ok"),s.qZA(),s.qZA())},directives:[r.lW,c.ZT],styles:[""]}),e})();var g=i(1841),u=i(8002),p=i(2340);let m=(()=>{class e{constructor(e){this.http=e}packType(){const e={headers:new g.WM({"Content-Type":"application/x-www-form-urlencoded"})},t=new URLSearchParams;let i=window.localStorage.getItem("Token");return this.http.post(`${p.N.apiUrl}/getpack_list?user_token=${i}&username=&saas_id=LIVEFSL&search_key=`,t.toString(),e).pipe((0,u.U)(e=>{try{return e}catch(t){return e}}))}getCargoDeliveryList(e){let t=e;const i={headers:new g.WM({"Content-Type":"application/x-www-form-urlencoded"})},o=new URLSearchParams;let n=window.localStorage.getItem("Token");return this.http.post(`${p.N.apiUrl}/getcargo_delivery_list?user_token=${n}&username=&saas_id=LIVEFSL&search_key=${t}`,o.toString(),i).pipe((0,u.U)(e=>{try{return e}catch(t){return e}}))}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(g.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=i(9470),f=i(8295),Z=i(9983),v=i(6627),b=i(1769),k=i(9075),x=i(6458);function w(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",15),s.TgZ(1,"div",16),s.TgZ(2,"mat-icon",17),s._uU(3,"arrow_upward"),s.qZA(),s.qZA(),s.TgZ(4,"div",18),s.TgZ(5,"h1"),s._uU(6,"Upload Photos"),s.qZA(),s.qZA(),s.TgZ(7,"div",19),s.TgZ(8,"input",20,21),s.NdJ("change",function(){s.CHM(e);const t=s.MAs(9);return s.oxw().selectedPhoto(t)}),s.qZA(),s.qZA(),s.TgZ(10,"div",22),s.TgZ(11,"button",23),s.NdJ("click",function(){return s.CHM(e),s.MAs(9).click()}),s._uU(12,"Select Photo"),s.qZA(),s.TgZ(13,"button",24),s.NdJ("click",function(){s.CHM(e);const t=s.oxw(),i=s.MAs(7);return t.openCamera(i)}),s._uU(14,"Capture Photo"),s.qZA(),s.qZA(),s.qZA()}2&e&&(s.xp6(2),s.Q6J("inline",!0))}function T(e,t){if(1&e&&(s.TgZ(0,"div",25),s._UZ(1,"img",26),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Q6J("src",e.selectedFileObjectUrl,s.LSH)}}const A=function(e,t){return{"d-none":e,"d-flex flex-grow-1 flex-column container overflow-auto":t}};let y=(()=>{class e{constructor(e,t,i){this.sanitizer=e,this.dialogRef=t,this._snackBar=i,this.isCameraPage=!1,this.isImageTaken=!1,this.isUploadClicked=!1}ngOnInit(){}save(){}selectedPhoto(e){this.selectedFileBlob=e.files[0];const t=URL.createObjectURL(e.files[0]);this.selectedFileObjectUrl=this.sanitizer.bypassSecurityTrustUrl(t)}uploadPhoto(){if(!this.isUploadClicked){this.isUploadClicked=!0;let e=new FileReader;e.readAsDataURL(this.selectedFileBlob),e.onloadend=()=>{}}}openCamera(e){this.isCameraPage=!0,navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1}).then(t=>{this.track=t.getTracks()[0],e.srcObject=t}).catch(function(e){console.error("Oops. Something is broken.",e)})}captureImage(e,t,i){e.width=t.videoWidth,e.height=t.videoHeight,e.getContext("2d").drawImage(t,0,0),i.src=e.toDataURL("image/webp"),this.selectedFileObjectUrl=e.toDataURL("image/webp"),e.toBlob(e=>this.selectedFileBlob=e),this.isImageTaken=!0,this.isCameraPage=!1}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(k.H7),s.Y36(c.so),s.Y36(x.ux))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-upload-photo-popup"]],decls:20,vars:10,consts:[[1,"d-flex","flex-column","overflow-auto","h-100"],[1,"cfs-title1"],[1,"flex-grow-1","d-flex","flex-column","container","overflow-auto"],["class","flex-grow-1 d-flex flex-column align-items-center justify-content-center",4,"ngIf"],[3,"ngClass"],["autoplay","","playsinline","",1,"showVideo","flex-grow-1","pb-3","overflow-auto",3,"hidden"],["cameraView",""],[1,"showVideo",3,"hidden"],["capturedPicture",""],["capturedImg",""],["mat-raised-button","","color","primary",1,"m-auto",3,"click"],["class","showImage p-3 flex-grow-1 overflow-auto m-auto",4,"ngIf"],[1,"d-flex","pb-1","pt-2"],["mat-raised-button","","mat-dialog-close","",1,"ml-auto"],["mat-raised-button","","color","primary",1,"ml-3",3,"disabled","click"],[1,"flex-grow-1","d-flex","flex-column","align-items-center","justify-content-center"],[1,"upload-icon-size","mb-3"],[3,"inline"],[1,""],[1,"d-none"],["type","file","id","myfile","name","myfile","accept","image/gif, image/jpeg",3,"change"],["selectFile",""],[1,"d-flex"],["mat-raised-button","","color","primary",1,"",3,"click"],["mat-raised-button","","color","primary",1,"ml-2",3,"click"],[1,"showImage","p-3","flex-grow-1","overflow-auto","m-auto"],[1,"w-100",3,"src"]],template:function(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",0),s.TgZ(1,"div",1),s._uU(2,"Capture Image"),s.qZA(),s.TgZ(3,"div",2),s.YNc(4,w,15,1,"div",3),s.TgZ(5,"div",4),s._UZ(6,"video",5,6),s._UZ(8,"canvas",7,8),s._UZ(10,"img",7,9),s.TgZ(12,"button",10),s.NdJ("click",function(){s.CHM(e);const i=s.MAs(9),o=s.MAs(7),n=s.MAs(11);return t.captureImage(i,o,n)}),s._uU(13,"Take Photo"),s.qZA(),s.qZA(),s.YNc(14,T,2,1,"div",11),s.TgZ(15,"div",12),s.TgZ(16,"button",13),s._uU(17," Close "),s.qZA(),s.TgZ(18,"button",14),s.NdJ("click",function(){return t.uploadPhoto()}),s._uU(19," Upload "),s.qZA(),s.qZA(),s.qZA(),s.qZA()}2&e&&(s.xp6(4),s.Q6J("ngIf",!t.selectedFileObjectUrl&&!t.isCameraPage),s.xp6(1),s.Q6J("ngClass",s.WLB(7,A,!t.isCameraPage,t.isCameraPage)),s.xp6(1),s.Q6J("hidden",t.isImageTaken),s.xp6(2),s.Q6J("hidden",!0),s.xp6(2),s.Q6J("hidden",!t.isImageTaken),s.xp6(4),s.Q6J("ngIf",t.selectedFileObjectUrl),s.xp6(4),s.Q6J("disabled",!t.selectedFileObjectUrl&&t.isUploadClicked))},directives:[o.O5,o.mk,r.lW,c.ZT,v.Hw],styles:[""]}),e})();var _=i(2873),q=i(7441),U=i(9047),C=i(2458);function N(e,t){1&e&&s._UZ(0,"app-loader")}function L(e,t){if(1&e&&(s.TgZ(0,"mat-label"),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij(" ",e.details.pack_type," ")}}function J(e,t){1&e&&(s.TgZ(0,"mat-lable"),s._uU(1,"Type"),s.qZA())}function D(e,t){if(1&e&&(s.TgZ(0,"mat-option",21),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.Q6J("value",e.value),s.xp6(1),s.hij(" ",e.viewValue," ")}}let I=(()=>{class e{constructor(e,t,i,o){this.dialog=e,this.data=t,this.cargoDeliveryService=i,this.DeliveryItemApiService=o,this.bookingList={},this.isLoading=!1,this.DeliveredPiece="",this.selectedContainer={segment_code:"05",container_number:"WHLU5580880"}}ngOnInit(){this.details=this.data.bookingList.Delivery_BL[0],this.cargoDeliveryService.packType().subscribe(e=>{this.types=e.Delivery_BL.map(e=>({value:e.port_code,viewValue:e.port_name}))})}uploadPhoto(){this.dialog.open(y,{width:"80%",height:"90%",data:{}}).afterClosed().subscribe(e=>{})}save(){if(this.DeliveredPiece){let e={receivedPiece:this.DeliveredPiece?this.DeliveredPiece:"",receivedWeight:this.receivedWeight?this.receivedWeight:"",receivedVolume:this.receivedVolume?this.receivedVolume:"",damageCondition:this.damage.value?this.damage.value:"",damageType:this.damageType?this.damageType:"",damageNotes:this.damageNotes?this.damageNotes:"",landedMarks:this.landedMarks?this.landedMarks:"",cfsNote:this.cfsNote?this.cfsNote:"",length:this.length?this.length:"",width:this.width?this.width:"",height:this.height?this.height:"",cbm:this.cbm?this.cbm:"",weight:this.weight?this.weight:"",unloadTime:this.formatDate((new Date).getTime()),containerNo:this.containerNo?this.containerNo:"",jobNo:this.jobNo?this.jobNo:"",hblNumber:this.hblNumber?this.hblNumber:"",packageType:this.packageType?this.packageType:"",subJobNo:this.subJobNo?this.subJobNo:""};this.DeliveryItemApiService.getSaveItem(e,this.selectedContainer).subscribe(e=>{this.isLoading=!1})}}calculateCBM(){}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(c.uw),s.Y36(c.WI),s.Y36(m),s.Y36(_.n))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-delivery-details-popup"]],decls:34,vars:7,consts:[[1,"d-flex"],[1,"d-flex","flex-column","w-100","h-100"],[4,"ngIf"],[1,"d-flex","flex-column","overflow-auto","h-150"],[1,"cfs-title1"],[1,"flex-grow-1","container","overflow-auto","h-150"],[1,"col-12","d-flex","flex-column","h-100"],[1,"d-flex","justify-content-between","w-100"],[1,"px-1","w-50"],["name","type",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","placeholder","Enter Delivery Qty","type","number","name","DeliveredPiece",3,"ngModel","ngModelChange","keyup"],[1,"d-flex","pb-1","py-5"],["mat-raised-button","","mat-dialog-close","",1,"ml-auto"],["mat-raised-button","","color","primary",1,"ml-3",3,"disabled","click"],[1,"pb-1","pt-2","mt-2","pt-5"],[1,"d-flex","justify-content-center"],["mat-raised-button","","color","primary",1,"ml-auto",3,"click"],["mat-raised-button","","color","primary",1,"ml-auto"],[1,"d-flex","justify-content-center","mt-1"],["mat-raised-button","","mat-dialog-close",""],[3,"value"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.YNc(2,N,1,0,"app-loader",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s._uU(5,"Delivery Item"),s.qZA(),s.TgZ(6,"div",5),s.TgZ(7,"form",6),s.TgZ(8,"div",7),s.TgZ(9,"mat-form-field",8),s.YNc(10,L,2,1,"mat-label",2),s.YNc(11,J,2,0,"mat-lable",2),s.TgZ(12,"mat-select",9),s.NdJ("ngModelChange",function(e){return t.packageType=e}),s.YNc(13,D,2,2,"mat-option",10),s.qZA(),s.qZA(),s.TgZ(14,"mat-form-field",8),s.TgZ(15,"mat-label"),s._uU(16,"Delivered Qty"),s.qZA(),s.TgZ(17,"input",11),s.NdJ("ngModelChange",function(e){return t.DeliveredPiece=e})("keyup",function(){return t.calculateCBM()}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(18,"div",12),s.TgZ(19,"button",13),s._uU(20," Close "),s.qZA(),s.TgZ(21,"button",14),s.NdJ("click",function(){return t.save()}),s._uU(22," Save "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(23,"div",15),s.TgZ(24,"div",16),s.TgZ(25,"button",17),s.NdJ("click",function(){return t.uploadPhoto()}),s._uU(26," Upload Photos "),s.qZA(),s.TgZ(27,"button",18),s._uU(28,"Complete"),s.qZA(),s.TgZ(29,"button",18),s._uU(30,"Add More Package"),s.qZA(),s.qZA(),s.TgZ(31,"div",19),s.TgZ(32,"button",20),s._uU(33,"Close"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.Q6J("ngIf",t.isLoading),s.xp6(8),s.Q6J("ngIf",t.details.pack_type),s.xp6(1),s.Q6J("ngIf",!t.details.pack_type),s.xp6(1),s.Q6J("ngModel",t.packageType),s.xp6(1),s.Q6J("ngForOf",t.types),s.xp6(4),s.Q6J("ngModel",t.DeliveredPiece),s.xp6(4),s.Q6J("disabled",!t.DeliveredPiece))},directives:[o.O5,a._Y,a.JL,a.F,f.KE,q.gD,a.JJ,a.On,o.sg,f.hX,Z.Nt,a.wV,a.Fj,r.lW,c.ZT,U.R,C.ey],styles:[""]}),e})();var S=i(2789),B=i(2178);function j(e,t){1&e&&(s.TgZ(0,"div",14),s._UZ(1,"mat-progress-bar",15),s.qZA())}function M(e,t){1&e&&(s.TgZ(0,"th",16),s._uU(1,"Delivered Qty"),s.qZA())}function Q(e,t){if(1&e&&(s.TgZ(0,"td",17),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.xp6(1),s.Oqu(e.rcvd_qty)}}function P(e,t){1&e&&(s.TgZ(0,"th",16),s._uU(1,"Condition"),s.qZA())}function F(e,t){if(1&e&&(s.TgZ(0,"td",18),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.xp6(1),s.Oqu(e.good_damage)}}function O(e,t){1&e&&(s.TgZ(0,"th",19),s._uU(1,"Action"),s.qZA())}function Y(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"td",18),s.TgZ(1,"div",20),s.TgZ(2,"button",21),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().unloadItem(t)}),s.TgZ(3,"mat-icon"),s._uU(4,"details"),s.qZA(),s.qZA(),s.TgZ(5,"button",21),s.NdJ("click",function(){const t=s.CHM(e),i=t.$implicit,o=t.index,n=s.oxw();return n.DeleteItem(i,n.dataSource,o,n.selectedHbl.hblNumber)}),s.TgZ(6,"mat-icon"),s._uU(7,"delete"),s.qZA(),s.qZA(),s.qZA(),s.qZA()}}function H(e,t){1&e&&s._UZ(0,"tr",22)}function E(e,t){1&e&&s._UZ(0,"tr",23)}let W=(()=>{class e{constructor(e,t){this.dialog=e,this.DeliveryItemApiService=t,this.isUploadClicked=!1,this.isSuccess=!0,this.isLoading=!1,this.dataSource=[],this.displayedColumns=["receivedPiece","damageNotes","actions"],this.selectedContainer={segment_code:"05",container_number:"WHLU5580880"},this.hblDetails={hblNumber:"220112000272",selectedContainer:{job_no:"22100302504"}}}ngOnInit(){this.details=this.bookingList}deliveryItem(){if(this.loadData(),!this.isUploadClicked){this.isUploadClicked=!0;const e=this.dialog.open(I,{height:"400px",width:"500px",data:{bookingList:this.bookingList}});e.disableClose=!0,e.afterClosed().subscribe(e=>{}),this.isUploadClicked=!1}}loadData(){this.isLoading=!0,this.DeliveryItemApiService.getUnloadDetails(this.hblDetails,this.selectedContainer).subscribe(e=>{this.dataSource=e.items_list,this.isLoading=!1})}unloadItem(e){}DeleteItem(e,t,i,o){}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(c.uw),s.Y36(_.n))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-delivery-details"]],inputs:{bookingList:"bookingList"},decls:17,vars:5,consts:[[1,"h-100","w-100","d-flex","flex-column","overflow-auto"],[1,"py-2","d-flex","align-items-center","justify-content-center","bg-white","border-top","flex-wrap"],["mat-raised-button","","color","primary",1,"mt-2","ml-3",3,"disabled","click"],["class","flex-grow-1 d-flex align-items-center justify-content-center ",4,"ngIf"],["mat-table","",1,"mat-elevation-z8","w-100","list-container",3,"dataSource"],["matColumnDef","receivedPiece"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","px-2",4,"matCellDef"],["matColumnDef","damageNotes"],["mat-cell","",4,"matCellDef"],["matColumnDef","actions"],["mat-header-cell","","class","text-right",4,"matHeaderCellDef"],["mat-header-row","","class","sticky-top",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"flex-grow-1","d-flex","align-items-center","justify-content-center"],["mode","indeterminate",1,"mx-4"],["mat-header-cell",""],["mat-cell","",1,"px-2"],["mat-cell",""],["mat-header-cell","",1,"text-right"],[1,"d-flex","justify-content-end"],["mat-icon-button","","color","primary",3,"click"],["mat-header-row","",1,"sticky-top"],["mat-row",""]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"button",2),s.NdJ("click",function(){return t.deliveryItem()}),s._uU(3," Delivery Item "),s.qZA(),s.qZA(),s.YNc(4,j,2,0,"div",3),s.TgZ(5,"table",4),s.ynx(6,5),s.YNc(7,M,2,0,"th",6),s.YNc(8,Q,2,1,"td",7),s.BQk(),s.ynx(9,8),s.YNc(10,P,2,0,"th",6),s.YNc(11,F,2,1,"td",9),s.BQk(),s.ynx(12,10),s.YNc(13,O,2,0,"th",11),s.YNc(14,Y,8,0,"td",9),s.BQk(),s.YNc(15,H,1,0,"tr",12),s.YNc(16,E,1,0,"tr",13),s.qZA(),s.qZA()),2&e&&(s.xp6(2),s.Q6J("disabled","SUCCESS"!=(null==t.bookingList||null==t.bookingList.Delivery_BL[0]?null:t.bookingList.Delivery_BL[0].status)),s.xp6(2),s.Q6J("ngIf",t.isLoading),s.xp6(1),s.Q6J("dataSource",t.dataSource),s.xp6(10),s.Q6J("matHeaderRowDef",t.displayedColumns),s.xp6(1),s.Q6J("matRowDefColumns",t.displayedColumns))},directives:[r.lW,o.O5,S.BZ,S.w1,S.fO,S.Dz,S.as,S.nj,B.pW,S.ge,S.ev,v.Hw,S.XQ,S.Gk],styles:[""]}),e})();var R=i(3738);function V(e,t){if(1&e&&(s.TgZ(0,"div",3),s.TgZ(1,"div"),s.TgZ(2,"mat-card"),s.TgZ(3,"div",4),s._uU(4),s.qZA(),s.TgZ(5,"div",5),s._uU(6),s.qZA(),s.TgZ(7,"div",4),s._uU(8),s.qZA(),s.TgZ(9,"div",5),s._uU(10),s.qZA(),s.TgZ(11,"div",4),s._uU(12),s.qZA(),s.TgZ(13,"div",5),s._uU(14),s.qZA(),s.TgZ(15,"div",4),s._uU(16),s.qZA(),s.TgZ(17,"div",5),s._uU(18),s.qZA(),s.TgZ(19,"div",4),s._uU(20),s.qZA(),s.TgZ(21,"div",5),s._uU(22),s.qZA(),s.TgZ(23,"div",4),s._uU(24),s.qZA(),s.TgZ(25,"div",5),s._uU(26),s.qZA(),s.TgZ(27,"div",4),s._uU(28),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(4),s.hij("Job : ",e.details.Job,""),s.xp6(2),s.hij("BL/Booking : ",e.details.BL_Booking,""),s.xp6(2),s.hij("Orgin : ",e.details.origin,""),s.xp6(2),s.hij("Destination : ",e.details.destination,""),s.xp6(2),s.hij("BOE : ",e.details.bill_of_entry,""),s.xp6(2),s.hij("Mark and Number : ",e.details.Mark_and_Number,""),s.xp6(2),s.hij("Commodity :",e.details.commodity,""),s.xp6(2),s.hij("CFS Slot : ",e.details.cfs_slot,""),s.xp6(2),s.AsE("Packages : ",e.details.packages,"/",e.details.pack_type,""),s.xp6(2),s.hij("Weight : ",e.details.weight,""),s.xp6(2),s.hij("Volume : ",e.details.volume,""),s.xp6(2),s.hij("Truck No : ",e.details.Truck_No,""),s.xp6(2),s.hij("Driver Name : ",e.details.Driver_Name,"")}}function X(e,t){if(1&e&&(s.TgZ(0,"div",6),s.TgZ(1,"div"),s.TgZ(2,"mat-card"),s.TgZ(3,"div",4),s._uU(4),s.qZA(),s.TgZ(5,"div",5),s._uU(6),s.qZA(),s.TgZ(7,"div",4),s._uU(8),s.qZA(),s.TgZ(9,"div",5),s._uU(10),s.qZA(),s.TgZ(11,"div",4),s._uU(12),s.qZA(),s.TgZ(13,"div",5),s._uU(14),s.qZA(),s.TgZ(15,"div",4),s._uU(16),s.qZA(),s.TgZ(17,"div",5),s._uU(18),s.qZA(),s.TgZ(19,"div",4),s._uU(20),s.qZA(),s.TgZ(21,"div",5),s._uU(22),s.qZA(),s.TgZ(23,"div",4),s._uU(24),s.qZA(),s.TgZ(25,"div",5),s._uU(26),s.qZA(),s.TgZ(27,"div",4),s._uU(28),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(4),s.hij("Job : ",e.details.Job,""),s.xp6(2),s.hij("BL/Booking : ",e.details.BL_Booking,""),s.xp6(2),s.hij("Orgin : ",e.details.origin,""),s.xp6(2),s.hij("Destination : ",e.details.destination,""),s.xp6(2),s.hij("BOE : ",e.details.bill_of_entry,""),s.xp6(2),s.hij("Mark and Number : ",e.details.Mark_and_Number,""),s.xp6(2),s.hij("Commodity :",e.details.commodity,""),s.xp6(2),s.hij("CFS Slot : ",e.details.cfs_slot,""),s.xp6(2),s.AsE("Packages : ",e.details.packages,"/",e.details.pack_type,""),s.xp6(2),s.hij("Weight : ",e.details.weight,""),s.xp6(2),s.hij("Volume : ",e.details.volume,""),s.xp6(2),s.hij("Truck No : ",e.details.Truck_No,""),s.xp6(2),s.hij("Driver Name : ",e.details.Driver_Name,"")}}let z=(()=>{class e{constructor(){}ngOnInit(){this.details=this.bookingList.Delivery_BL[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-list-delivery"]],inputs:{bookingList:"bookingList"},decls:3,vars:2,consts:[[1,"h-100","w-100","d-flex","flex-column","overflow-auto"],["class","flex-grow-1 overflow-auto d-none d-md-block",4,"ngIf"],["class","flex-grow-1 overflow-auto d-block d-md-none",4,"ngIf"],[1,"flex-grow-1","overflow-auto","d-none","d-md-block"],[1,"pb-2","color1","text-white","pl-2","pt-2"],[1,"pb-2","color","pl-2","pt-2"],[1,"flex-grow-1","overflow-auto","d-block","d-md-none"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.YNc(1,V,29,14,"div",1),s.YNc(2,X,29,14,"div",2),s.qZA()),2&e&&(s.xp6(1),s.Q6J("ngIf",!0),s.xp6(1),s.Q6J("ngIf",!0))},directives:[o.O5,R.a8],styles:[".color[_ngcontent-%COMP%]{background-color:#e7e8ea!important}.color1[_ngcontent-%COMP%]{background-color:#878a8f!important}"]}),e})();function $(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"app-list-delivery",25),s.NdJ("selectedRow",function(t){return s.CHM(e),s.oxw().bookingNumberSelected(t)}),s.qZA()}if(2&e){const e=s.oxw();s.Q6J("bookingList",e.bookingList)}}function G(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"button",26),s.NdJ("click",function(){return s.CHM(e),s.oxw().searchBooking()}),s.TgZ(1,"mat-icon"),s._uU(2,"search"),s.qZA(),s._uU(3," Search \xa0\xa0"),s.qZA()}}function K(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"button",27),s.NdJ("click",function(){s.CHM(e);const t=s.oxw();return t.openBookingNumberScannerPopup(t.bookingSearchFC,"BookingNumber-mobile")}),s.TgZ(1,"mat-icon"),s._uU(2,"qr_code_scanner"),s.qZA(),s._uU(3," Scan \xa0\xa0"),s.qZA()}}function ee(e,t){if(1&e&&s._UZ(0,"app-list-delivery",28),2&e){const e=s.oxw();s.Q6J("bookingList",e.bookingList)}}const te=[{path:"",component:(()=>{class e{constructor(e,t){this.dialog=e,this.cargoDeliveryService=t,this.bookingSearchFC=new a.NI,this.isBookingSearch=!1,this.isBookingExpanded=!0,this.showMobileBookingSearch=!1,this.selectedBookingNumber=null,this.tabIndex=0,this.myControl=new a.NI,this.bookingNumber=[],this.isSearchLoading=!1,this.selectedValue=""}ngOnInit(){}bookingNumberSelected(e){this.selectedBookingNumber=e,this.tabIndex=1}openBookingNumberScannerPopup(e,t){const i=this.dialog.open(l.a,{height:"450px",width:"400px"});i.disableClose=!0,i.afterClosed().subscribe(t=>{e.setValue(t),window.navigator.vibrate&&(window.navigator.vibrate(100),setTimeout(()=>{window.navigator.vibrate(0)},500))}),"Booking-mobile"===t&&(this.showMobileBookingSearch=!0),"Booking-desktop"===t&&(this.isBookingSearch=!0)}clearSearch(){this.isBookingSearch=!this.isBookingSearch,this.bookingSearchFC.setValue(""),this.search="",this.bookingNumber=[]}getBookingListFun(e){}searchBooking(){this.cargoDeliveryService.getCargoDeliveryList(this.search).subscribe(e=>{this.bookingList=e,console.log(e),"FAILED"==this.bookingList.Delivery_BL[0].status&&this.dialog.open(d,{width:"400px",data:{}})})}allClosed(){this.bookingList=null,this.myControl.setValue("",{emitEvent:!1})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(c.uw),s.Y36(m))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-cargo-delivery"]],decls:39,vars:11,consts:[[1,"d-flex","flex-column","w-100","h-100"],[1,"d-none","d-md-flex","flex-grow-1","overflow-auto","h-100"],[1,"w-50","d-flex","overflow-auto","flex-column"],[1,"d-flex","py-2"],[1,"px-3","d-flex","py-2","align-items-center"],[1,"font-italic","pt-2","cfs-title1","text-danger","bold"],[1,"ml-auto"],[1,"flex-grow-1"],["type","text","aria-label","Number","matInput","","placeholder","HBL/Booking/Bill Of Entry",3,"ngModel","formControl","ngModelChange"],["searchInput",""],["mat-icon-button","",3,"click"],[3,"bookingList","selectedRow",4,"ngIf"],[3,"vertical"],[1,"d-flex","overflow-auto","w-50","flex-column"],[1,"flex-grow-1","overflow-auto",3,"bookingList"],[1,"d-flex","flex-column","d-md-none","h-100","w-100","overflow-auto"],[1,"bg-white","border-top","p-2","d-flex"],[1,"flex-grow-1","pr-2"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","color","primary","class","ml-2",3,"click",4,"ngIf"],[1,"d-flex","flex-column","flex-grow-1","overflow-auto"],[1,"flex-grow-1","overflow-auto"],[3,"bookingList",4,"ngIf"],[1,""],[1,"flex-grow-1",3,"bookingList"],[3,"bookingList","selectedRow"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",1,"ml-2",3,"click"],[3,"bookingList"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s._UZ(1,"app-header"),s.TgZ(2,"div",1),s.TgZ(3,"div",2),s.TgZ(4,"div",3),s.TgZ(5,"div",4),s.TgZ(6,"div",5),s._uU(7,"Cargo Delivery"),s.qZA(),s.qZA(),s.TgZ(8,"div",6),s.TgZ(9,"mat-form-field",7),s.TgZ(10,"mat-label"),s._uU(11,"Search"),s.qZA(),s.TgZ(12,"input",8,9),s.NdJ("ngModelChange",function(e){return t.search=e}),s.qZA(),s.qZA(),s.TgZ(14,"button",10),s.NdJ("click",function(){return t.searchBooking()}),s.TgZ(15,"mat-icon"),s._uU(16,"search"),s.qZA(),s.qZA(),s.TgZ(17,"button",10),s.NdJ("click",function(){return t.openBookingNumberScannerPopup(t.bookingSearchFC,"BookingNumber-desktop")}),s.TgZ(18,"mat-icon"),s._uU(19,"qr_code_scanner"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(20,$,1,1,"app-list-delivery",11),s.qZA(),s._UZ(21,"mat-divider",12),s.TgZ(22,"div",13),s._UZ(23,"app-delivery-details",14),s.qZA(),s.qZA(),s.TgZ(24,"div",15),s.TgZ(25,"div",16),s.TgZ(26,"div",6),s.TgZ(27,"mat-form-field",17),s.TgZ(28,"mat-label"),s._uU(29,"Search"),s.qZA(),s.TgZ(30,"input",8,9),s.NdJ("ngModelChange",function(e){return t.search=e}),s.qZA(),s.qZA(),s.YNc(32,G,4,0,"button",18),s.YNc(33,K,4,0,"button",19),s.qZA(),s.qZA(),s.TgZ(34,"div",20),s.TgZ(35,"div",21),s.YNc(36,ee,1,1,"app-list-delivery",22),s.qZA(),s.TgZ(37,"div",23),s._UZ(38,"app-delivery-details",24),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(12),s.Q6J("ngModel",t.search)("formControl",t.myControl),s.xp6(8),s.Q6J("ngIf",t.bookingList),s.xp6(1),s.Q6J("vertical",!0),s.xp6(2),s.Q6J("bookingList",t.bookingList),s.xp6(7),s.Q6J("ngModel",t.search)("formControl",t.myControl),s.xp6(2),s.Q6J("ngIf",!t.showMobileBookingSearch),s.xp6(1),s.Q6J("ngIf",!t.showMobileBookingSearch),s.xp6(3),s.Q6J("ngIf",t.bookingList),s.xp6(2),s.Q6J("bookingList",t.bookingList))},directives:[h.G,f.KE,f.hX,Z.Nt,a.Fj,a.JJ,a.oH,r.lW,v.Hw,o.O5,b.d,W,z],styles:[""]}),e})()}];let ie=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.Bz.forChild(te)],n.Bz]}),e})();var oe=i(4885),ne=(i(9238),i(9490),i(521),i(5319),i(9765),i(1439),i(6682),i(5917),i(2759),i(625)),ae=i(9243);i(6461),i(7636),i(5257),i(3190),i(5435),i(8307),i(1289),i(946);const le={provide:new s.OlP("mat-autocomplete-scroll-strategy"),deps:[ne.aV],useFactory:function(e){return()=>e.scrollStrategies.reposition()}};let se=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[le],imports:[[ne.U8,C.Ng,C.BQ,o.ez],ae.ZD,C.Ng,C.BQ]}),e})();var re=i(5939),ce=i(2613),de=i(171),ge=i(4466);let ue=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.ez,ie,ge.m,b.t,v.Ps,f.lN,R.QW,S.p0,B.Cv,c.Is,de.To,r.ot,q.LD,a.UX,a.u5,ce.Fk,Z.c,x.ZX,re.Nh,se,oe.Cq]]}),e})()}}]);