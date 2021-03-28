
export class DropdownSettings {
    dropdownHeight = 'auto';
    btnWidth = 'auto';
    noneSelectedBtnText = 'None selected';
    dataIdProperty = 'id';
    dataNameProperty = 'name';
    deselectAllBtnText = 'Deselect all';
    enableFilter = false;
    caseSensitiveFilter = false;
    selectAllBtnText = 'Select all';
    dropdownClasses: string = null;
    headerText: string = null;
    selectionLimit: number = null;
    showDeselectAllBtn: boolean = null;
    showSelectAllBtn: boolean = null;
    btnClasses: string = null;
    labelSelectedItem: string = '{0} item selected';
    labelSelectedItems: string = '{0} items selected'; 
    showSelectedItems: boolean = false;

    constructor(settings?: any) {
        if(!settings) return;
        this.noneSelectedBtnText = settings.noneSelectedBtnText || this.noneSelectedBtnText ;
        this.dataIdProperty = settings.dataIdProperty || this.dataIdProperty;
        this.dataNameProperty = settings.dataNameProperty || this.dataNameProperty;
        this.deselectAllBtnText = settings.deselectAllBtnText || this.deselectAllBtnText;
        this.enableFilter = settings.enableFilter;
        this.caseSensitiveFilter = settings.caseSensitiveFilter;
        this.selectAllBtnText = settings.selectAllBtnText || this.selectAllBtnText;8
        this.dropdownClasses = settings.dropdownClasses;
        this.headerText = settings.headerText;
        this.selectionLimit = settings.selectionLimit;
        this.showDeselectAllBtn = settings.showDeselectAllBtn;
        this.showSelectAllBtn = settings.showSelectAllBtn;
        this.btnWidth = settings.btnWidth || this.btnWidth; 
        this.dropdownHeight = settings.dropdownHeight || this.dropdownHeight;
        this.btnClasses = settings.btnClasses;
        this.labelSelectedItem = settings.labelSelectedItem || this.labelSelectedItem;
        this.labelSelectedItems = settings.labelSelectedItems || this.labelSelectedItems;
        this.showSelectedItems = settings.showSelectedItems || this.showSelectedItems;
    }
}