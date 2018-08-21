import { PMFObjectType } from './enumerations';


export function GetOwnersList(ownerAttributeValue): any[] {
    if (ownerAttributeValue != null && typeof ownerAttributeValue !== 'undefined' && ownerAttributeValue != '' && ownerAttributeValue != '-') {
        var owners = ownerAttributeValue.split(';');
        var ownersObject = [];
        for (var index in owners) {
            if (owners[index] != '') {
                var owner = owners[index];
                var sid = owner.split('|')[0];
                var name = owner.split('|')[1].split('$')[0];
                ownersObject.push({
                    "DisplayName": name, "ID": sid, "UserID": sid
                })

            }
        }
        return ownersObject;
    }
    else return [];
}

export function GetStrategyItemAttributeValue(StrategyItemAttributes, AttributeID, Formatter) {
    let ValueFound = StrategyItemAttributes.find(e => e.AttributeID == AttributeID);

    if (ValueFound != undefined && ValueFound != null && ValueFound.length != 0) {
        if (Formatter)
            return Formatter(ValueFound.AttributeValue);
        else
            return ValueFound.AttributeValue;
    }
}
export function GetDateStringFromTimeID(timeID) {
    if (timeID != null && timeID != 0) {
        let dateStr = timeID.toString().substring(4, 6) + "/" + timeID.toString().substring(6, 8) + "/" + timeID.toString().substring(0, 4);
        return dateStr;
    }
    else return null;
}



export function GetLastUpdatedDate(val) {
    var LastModifiedDateId = -1;
    for (let item of val.Scores) {

        if (item.Value.LinkedItems && item.Value.LinkedItems.length > 0) {
            //if the lastupdated date of this score object is greater ==>(newer)
            if (item.Value.LinkedItems[0].LastUpdatedTimeID &&
                item.Value.LinkedItems[0].LastUpdatedTimeID > LastModifiedDateId)
                LastModifiedDateId = item.Value.LinkedItems[0].LastUpdatedTimeID;
        }

    }
    return LastModifiedDateId == -1 ? null : GetDateStringFromTimeID(LastModifiedDateId);

}


export function getKPIOwnersNames(kpi) {
    var ownerAttr;
    var ownerNames = '';
    var ownersList = [];

    /////to handle different types of kpi objects [kpi and linked items]
    if (kpi.ExtendedAttributes.length > 0) {
        if (kpi.ExtendedAttributes[0].AttributeName) {
            ownerAttr = kpi.ExtendedAttributes.find(a => a.AttributeName.toLowerCase() == "Owner".toLowerCase());
            if (ownerAttr)
                ownersList = GetOwnersList(ownerAttr.AttributeValue);
        }
        else {
            ownerAttr = kpi.ExtendedAttributes.find(a => a.Key.toLowerCase() == "Owner".toLowerCase());
            if (ownerAttr)
                ownersList = GetOwnersList(ownerAttr.Value);
        }
    }


    var separator = ', ';
    for (var index in ownersList)
        ownerNames += ownersList[index].DisplayName + separator;
    if (ownerNames.endsWith(separator))
        ownerNames = ownerNames.substring(0, ownerNames.length - separator.length)
    if (ownerNames == '')
        ownerNames = '-';
    return ownerNames;
}

export function getKPITrendClass(kpi) {
    let classString = '';
    if (kpi.IsMeasure) {
        let bandingID = null;
        if (kpi.Targets && kpi.Targets.length != 0)
            bandingID = kpi.Targets[0].BandingID;
        else if (kpi.BandingID) //for the linked KPIs in the initiative DB
            bandingID = kpi.BandingID;

        if (bandingID == 1) {
            if (kpi.Score.ActualTrend == 3)
                classString += 'upArrow trend green';
            else if (kpi.Score.ActualTrend == 4)
                classString += 'upArrow trend red';
            else if (kpi.Score.ActualTrend == 2)
                classString += 'upArrow trend black';
        }

        else if (bandingID == 2) {
            if (kpi.Score.ActualTrend == 3)
                classString += 'downArrow trend green';
            else if (kpi.Score.ActualTrend == 4)
                classString += 'downArrow trend red';
            else if (kpi.Score.ActualTrend == 2)
                classString += 'downArrow trend black';
        }
    }
    else {
        //get the direction
        switch (kpi.Score.ScoreTrend) {
            case 2://the same
                classString = 'sameArrow';
                break;
            case 3:
                classString += 'upArrow ';
                break;
            case 4:
                classString += 'downArrow ';
                break;
        }
        if (kpi.Score.ScoreTrend != 2) {
            switch (kpi.Score.ScoreStatus) //the same case is always black
            {
                case 0:
                    classString += ' green';
                    break;
                case 1:
                    classString += ' yellow';
                    break;
                case 2:
                    classString += ' red';
                    break;
                case 4:
                    classString += ' blue';
                    break
                default: //for the NA and ND
                    classString += ' gray';
                    break;
            }
        }
    }

    return classString;
}

export function deepCopy(oldObj: any) {
    var newObj = oldObj;
    if (oldObj && typeof oldObj === "object") {
        newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
        for (var i in oldObj) {
            newObj[i] = deepCopy(oldObj[i]);
        }
    }
    return newObj;
}

export function groupByArray(xs, key) {
    return xs.reduce(function (rv, x) {
        let v = key instanceof Function ? key(x) : x[key];
        let el = rv.find((r) => r && r.key === v);
        if (el) {
            el.values.push(x);
        } else {
            rv.push({ key: v, values: [x] });
        } return rv;
    }, []);
}

export function getOwnersString(owners: any[]) {
    if (owners == null || owners.length == 0) return null;
    let result = '';

    if (owners != null)
        for (let owner of owners)
            result += owner.UserID + '|' + owner.DisplayName + ';';

    return result.length > 1 ? result.slice(0, result.lastIndexOf(';')) : null;
}

export function newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function getInitNumber(initiative) {
    if (initiative.StrategyItemAttributes.find(a => a.Key == "Code")) {
        return initiative.StrategyItemAttributes.find(a => a.Key == "Code")["Value"];
    }
}
export function sortInits(initiatives, propName, toggleOrientation = true, sortProps) {
    let sortProp = sortProps[propName];

    if (sortProp.selected && toggleOrientation)
        sortProp.asc = !sortProp.asc;
    else
        sortProp.selected = true;

    for (let prop in sortProps) {
        if (prop != propName) {
            sortProps[prop].selected = false;
            sortProps[prop].asc = true;
        }
    }

    let sortedInitiatives = initiatives.sort((init1, init2) => {

        let k1Value = init1[propName],
            k2Value = init2[propName];

        if (typeof k1Value == 'string') {
            k1Value = k1Value.toLowerCase(),
                k2Value = k2Value.toLowerCase();
        }

        if (k1Value < k2Value)
            return sortProp.asc ? -1 : 1;
        else if (k1Value > k2Value)
            return sortProp.asc ? 1 : -1;
        else return 0;
    });
    return sortedInitiatives;
}

export function mapSortingPropForInits(initiatives, isEnglish) {
    for (let init of initiatives) {
        init.name = isEnglish ? init.Name_En : init.Name_Ar;
    }
}

export function detectSelectedSortProp(sortProps) {
    let selectedSortedProp;
    for (let prop in sortProps)
        if (sortProps[prop].selected) {
            selectedSortedProp = prop;
            break;
        }

    return selectedSortedProp;
}

export function checkColumnVisibility(initiative) // to show and hide init headers
{
    var columns = {
        showProgressKPIsColumn: false,
        showScheduleStatusColumn: false,
        showFinancialStatusColumn: false,
        showCompletionProgressColumn: false
    }
    if (initiative && initiative.Scores.length > 0) {
        for (var initScoreIndex = 0; initScoreIndex < initiative.Scores.length; initScoreIndex++) {
            if (!initiative.Scores[initScoreIndex].Value.IsDefault) {
                if (initiative.Scores[initScoreIndex].Key == "ProgressKPIs") {
                    columns.showProgressKPIsColumn = true;
                }
                if (initiative.Scores[initScoreIndex].Key == "InitiativeScheduleStatus") {
                    columns.showScheduleStatusColumn = true;
                }
                if (initiative.Scores[initScoreIndex].Key == "BudgetScore") {
                    columns.showFinancialStatusColumn = true;
                }
                if (initiative.Scores[initScoreIndex].Key == "InitiativeCompletionProgress") {
                    columns.showCompletionProgressColumn = true;
                }
            }
        }
    }
    return columns;
}

//Method used to construct dictionary object (attributeObject) used in item-descriptor component according to passed in strategy item type and language
//attributeObject will be in format {Property name : (boolean)} where boolean value indicate whether property is direct strategy item property (True) or extended property (False)
export function getStrategyItemDescriptionAttributes(strategyItem: PMFObjectType, isEnglish: boolean): any {

    var attributeObject = {};

    switch (strategyItem) {
        case PMFObjectType.Objective:

            isEnglish ? attributeObject['Description_En'] = true : attributeObject['Description_Ar'] = true;


            attributeObject['Code'] = true;

            break;
        default:
            return null;
    }

    return attributeObject;
}


export function getTime(date) {
    date = new Date(date);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let timePostFix;
    if (hours > 12) {
        hours -= 12;
        timePostFix = ' ' + this.translate.instant("Common.PM");
    }
    else
        timePostFix = ' ' + this.translate.instant("Common.AM");
    if (hours.toString().length == 1)
        hours = "0" + hours.toString();
    if (minutes.toString().length == 1)
        minutes = "0" + minutes.toString();
    return hours.toString() + ':' + minutes.toString() + timePostFix;
}

export function mapInitiativeAttributes(attributes, items, translateService, parentResourceKey) {

    if (attributes && items && items.length > 0) {

        items.forEach(item => {
            item.filteredAttributes = [];
            attributes.forEach(viewAttribute => {
                let localizedName = translateService.instant(parentResourceKey + '.' + viewAttribute.AttributeName);
                if (item[viewAttribute.AttributeName] !== undefined) {
                    item.filteredAttributes.push({
                        AttributeName: viewAttribute.AttributeName,
                        AttributeType: viewAttribute.ItemType,
                        AttributeValue: item[viewAttribute.AttributeName],
                        AttributeLocalizedName: localizedName
                    });
                }
                else {
                    let extendedAttribute = item.StrategyItemAttributes.filter(ea => ea.Key == viewAttribute.AttributeName)[0];
                    if (extendedAttribute) {
                        item.filteredAttributes.push(
                            {
                                AttributeName: viewAttribute.AttributeName,
                                AttributeType: viewAttribute.ItemType,
                                AttributeValue: extendedAttribute.Value,
                                AttributeLocalizedName: localizedName
                            }
                        );
                    }
                }
            });
        });
    }
}


export function formatDefaultAttr(attributeValue) {
    let result = attributeValue;
    if (result == undefined || result == null || (typeof result === "string" && result.match(/^ *$/) !== null))
      result = '-';
    return result;
  }

  export function formatCustomDimensionAttr(attributeValue) {
    let result = attributeValue;
    if (result == undefined || result == null)
      result = '-';
    return result;
  }

  export function formatBoolAttr(attributeValue) {
    let result;
    if (attributeValue && attributeValue != "0" && attributeValue != "false")
      result = this.translate.instant('Common.Yes');
    else
      result = this.translate.instant('Common.No');
    return result;
  }

  export function formatDateAttr(attributeValue) {
    let result = new Date(attributeValue).toLocaleDateString('en-gb');
    if (result == undefined || result == null)
      result = '-';
    return result;
  }

  export function formatUserAttr(attributeValue) {
    let owners = GetOwnersList(attributeValue);
    let result;
    if (owners && owners.length > 0)
      result = owners[0].DisplayName;
    else
      result = '-';
    return result;
  }
//Fuzzy search is an alternative mechanism to semantic serach - the point behind it is enhancing system readability by matching the closest possible matching not only exact matching
export function fuzzySearch(needle: string, haystack: string) {
    const haystackLC = haystack.toLowerCase();
    const needleLC = needle.toLowerCase();

    const hlen = haystack.length;
    const nlen = needleLC.length;

    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needleLC === haystackLC;
    }
    outer: for (let i = 0, j = 0; i < nlen; i++) {
        const nch = needleLC.charCodeAt(i);

        while (j < hlen) {
            if (haystackLC.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}

export function getMaxServiceCallFiles(filesToBeSaved, maxServiceCallDocumentsSize) {

  let currentChunkSize = 0;
  var filestoBeSavedChunk = [];
  if (filesToBeSaved && filesToBeSaved.length > 0) {
    filestoBeSavedChunk.push(filesToBeSaved[0]);
    currentChunkSize += filesToBeSaved[0].file.size;
    filesToBeSaved.splice(0, 1);

    if (currentChunkSize < maxServiceCallDocumentsSize) {
      for (var index = 0; index < filesToBeSaved.length; index++) {
        currentChunkSize += filesToBeSaved[index].file.size;

        if (currentChunkSize < maxServiceCallDocumentsSize) {
          filestoBeSavedChunk.push(filesToBeSaved[index]);
          filesToBeSaved.splice(index, 1);
          index--;
        }
        else
          break;
      }
    }
  }
  return filestoBeSavedChunk;
}


export function setTrackingDataDeletedDocumentsWithEmptyArray(strategyItemsTrackingData, milestoneProgressCalculationMethodName) {
    if (strategyItemsTrackingData) {
        for (let index = 0; index < strategyItemsTrackingData.length; index++) {
            if (strategyItemsTrackingData && strategyItemsTrackingData[index] && strategyItemsTrackingData[index].CalculationMethodsDirectValues[milestoneProgressCalculationMethodName]) {
                strategyItemsTrackingData[index].CalculationMethodsDirectValues[milestoneProgressCalculationMethodName].DeletedDocuments = [];
            }
        }
    }
}

export function isTrackingDatahasDeletedDocuments(strategyItemsTrackingData, milestoneProgressCalculationMethodName) {
  if (strategyItemsTrackingData) {
      for (let index = 0; index < strategyItemsTrackingData.length; index++) {
          if (strategyItemsTrackingData && strategyItemsTrackingData[index] && strategyItemsTrackingData[index].CalculationMethodsDirectValues[milestoneProgressCalculationMethodName]) {
              var deletedDocs = strategyItemsTrackingData[index].CalculationMethodsDirectValues[milestoneProgressCalculationMethodName].DeletedDocuments;
              if (deletedDocs && deletedDocs.length > 0) {
                  return true;
              }
          }
      }
  }
  return false;
}
