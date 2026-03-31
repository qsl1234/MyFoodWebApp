import useDictStore from '@/store/modules/dict'
import { getDicts } from '@/api/system/dict/data'
import { ref, toRefs } from 'vue'

/**
 * 获取字典数据
 */
export function useDict(...args) {
  const res = ref({});
  return (() => {
    args.forEach((dictType, index) => {
      res.value[dictType] = [];
      const dicts = useDictStore().getDict(dictType);
      if (dicts) {
        res.value[dictType] = dicts;
      } else {
        getDicts(dictType).then(resp => {
          res.value[dictType] = resp.data.map(p => ({ label: p.dictLabel, value: p.dictValue, elTagType: p.listClass, elTagClass: p.cssClass }))
          useDictStore().setDict(dictType, res.value[dictType]);
        })
      }
    })
    return toRefs(res.value);
  })()
}

/**
 * 获取字典数据拼接成text:'',value:''
 */
export function useTextDict(...args) {
  const res = ref({});
  return (() => {
    args.forEach((dictType, index) => {
      res.value[dictType] = [];
      const dicts = useDictStore().getDict(dictType);
      if (dicts) {
		  console.log("===dicts=dictLabel="+dicts[0].value)
		 
         // res.value[dictType] = dicts;
		 if(!dicts[0].text){
			res.value[dictType] = dicts.map(item => ({
			          text: item.label, 
			          value: item.value 
			        })); 
		 }else{
			 res.value[dictType] = dicts.map(item => ({
			           text: item.text, 
			           value: item.value 
			         }));
		 }
		
      } else {
        getDicts(dictType).then(resp => {
		 
			console.log("===dicts=dictLabel="+resp.data[0].dictLabel)
			 console.log("===dicts=text="+resp.data[0].text)
          // res.value[dictType] = resp.data.map(p => ({ label: p.dictLabel, value: p.dictValue, elTagType: p.listClass, elTagClass: p.cssClass }))
         res.value[dictType] = resp.data.map(item => ({
                   text: item.dictLabel, 
                   value: item.dictValue 
                 }));
		  useDictStore().setDict(dictType, res.value[dictType]);
        })
      }
    })
    return toRefs(res.value);
  })()
}