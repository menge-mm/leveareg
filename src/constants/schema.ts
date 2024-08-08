import { z } from 'zod';
import { procedureDictionary } from './data';
import { BundleResourceType } from '@/types/regForm';

export const resourceAttributes = new Map([
  [
    'Condition',
    {
      code: {
        formType: 'select',
        title: 'Code',
        options: [
          { value: 'J06', display: 'عدوى الجهاز التنفسي العلوي' },
          { value: 'I10', display: 'ارتفاع ضغط الدم' },
          { value: 'F43', display: 'اضطراب عاطفي معتدل إلى شديد' },
          { value: 'Z00.0', display: 'العناية بالأسنان' },
          { value: 'K20-K31', display: 'مشكلة في الجهاز الهضمي' },
          { value: 'E11', display: 'داء السكري' },
          { value: 'G40', display: 'الصرع / نوبات' },
          { value: 'Z41.2', display: 'استخراجات الأسنان' },
          { value: 'N39.0', display: 'عدوى المسالك البولية' },
          { value: 'J45', display: 'ربو قصبي' },
          { value: 'F20-F29', display: 'الذهان (بما في ذلك اضطراب ثنائي القطب)' },
          { value: 'D50', display: 'فقر الدم' },
          { value: 'E05', display: 'فرط نشاط الغدة الدرقية' },
          { value: 'F70-F79', display: 'الإعاقة الذهنية واضطرابات النمو' },
          { value: 'B76', display: 'الديدان' },
          { value: 'E03', display: 'قصور الغدة الدرقية' },
          { value: 'F45', display: 'شكاوى جسدية غير مفسرة طبياً' },
          { value: 'A09', display: 'إسهال' },
          { value: 'I64', display: 'حوادث الأوعية الدموية (السكتة الدماغية)' },
          { value: 'F84.0', display: 'التوحد' },
          { value: 'V01-V99', display: 'حوادث السيارات، الدراجات النارية، إلخ.' },
          { value: 'F90', display: 'أطفال مفرطون في النشاط' },
          { value: 'K29', display: 'التهاب المعدة والأمعاء' },
          { value: 'Icterus', display: 'متلازمة الصفراء الحادة' },
          { value: 'B01', display: 'جدري الماء' },
          { value: 'B86', display: 'الجرب' },
          { value: 'H10', display: 'التهاب الملتحمة' },
          { value: 'M06', display: 'التهاب المفاصل الروماتويدي' },
          { value: 'J18', display: 'عدوى الجهاز التنفسي السفلي' },
          { value: 'H65', display: 'التهاب الأذن الوسطى' },
          { value: 'H75', display: 'التهاب الأذن الداخلية' },
          { value: 'A00', display: 'الكوليرا' },
          { value: 'A02', display: 'عدوى السالمونيلا الأخرى' },
          { value: 'A03', display: 'الشيغيلات' },
          { value: 'A06', display: 'الأميبيات' },
          { value: 'B00', display: 'عدوى فيروس الهربس [الهربس البسيط]' },
          { value: 'B20', display: 'مرض الإيدز الناتج عن الأمراض المعدية والطفيلية' },
          { value: 'B82', display: 'طفيليات معوية غير محددة' },
          { value: 'E46', display: 'سوء التغذية البروتيني الطاقي' },
          { value: 'E86', display: 'نقص الحجم' },
          { value: 'J13', display: 'الالتهاب الرئوي بسبب المكورات الرئوية' },
          { value: 'J15', display: 'التهاب الرئة البكتيري، غير مصنف في مكان آخر' },
          { value: 'K02', display: 'تسوس الأسنان' },
          { value: 'K28', display: 'قرحة المعدة اللفائفية' },
          { value: 'K30', display: 'عسر الهضم' },
          { value: 'K52', display: 'التهاب المعدة والقولون غير المعدي الأخر' },
          { value: 'K59', display: 'اضطرابات الأمعاء الوظيفية الأخرى' },
          { value: 'L03', display: 'التهاب النسيج الخلوي' },
          { value: 'L30', display: 'التهاب الجلد الآخر' },
          { value: 'N39', display: 'اضطرابات الجهاز البولي' },
          { value: 'O80', display: 'لقاء للتسليم الكامل الأجل غير المعقد' },
          { value: 'T14', display: 'إصابة غير محددة' },
          { value: 'Z59', display: 'المشاكل المتعلقة بالسكن والظروف الاقتصادية' },
          { value: 'Z60', display: 'المشاكل المتعلقة بالبيئة الاجتماعية' },
          // { value: "A09", display: "التهاب الأمعاء والقولون المعدي" },
          { value: 'B02', display: 'الحزام الناري [هربس زوستر]' },
          { value: 'B18', display: 'التهاب الكبد الفيروسي المزمن' },
          { value: 'C53', display: 'الورم الخبيث لعنق الرحم' },
          { value: 'D50', display: 'فقر الدم بنقص الحديد' },
          { value: 'E03', display: 'قصور الغدة الدرقية الأخر' },
          { value: 'E55', display: 'نقص فيتامين د' },
          { value: 'F32', display: 'اضطراب الاكتئاب الرئيسي' },
          { value: 'G40', display: 'الصرع' },
          { value: 'H10', display: 'التهاب الملتحمة' },
          { value: 'I10', display: 'ارتفاع ضغط الدم الأساسي' },
          { value: 'I20', display: 'الذبحة الصدرية' },
          { value: 'I25', display: 'مرض القلب الإقفاري المزمن' },
          { value: 'J06', display: 'العدوى الحادة للجهاز التنفسي العلوي' },
          { value: 'L20', display: 'التهاب الجلد التأتبي' },
          { value: 'L50', display: 'الشرى' },
          { value: 'M05', display: 'التهاب المفاصل الروماتويدي مع عامل روماتويدي' },
          { value: 'M54', display: 'ألم الظهر' },
          { value: 'N10', display: 'التهاب الكلى الأنبوبي الكلوي الحاد' },
          { value: 'N17', display: 'الفشل الكلوي الحاد' },
          { value: 'O15', display: 'تسمم الحمل' },
          {
            value: 'P03',
            display: 'المولود الجديد المتأثر بمضاعفات المشيمة والحبل السري والأغشية',
          },
          { value: 'Q00', display: 'عدم تكون الدماغ وتشوهات مماثلة' },
          { value: 'R50', display: 'الحمى' },
          { value: 'S05', display: 'إصابة العين والمدار' },
          { value: 'T74', display: 'متلازمات سوء المعاملة' },
          { value: 'U07', display: 'كوفيد-19' },
          { value: 'V01', display: 'المشاة المصابون في تصادم مع دراجة هوائية' },
          { value: 'X00', display: 'التعرض لحريق غير مسيطر عليه في مبنى أو هيكل' },
          { value: 'Z62', display: 'المشاكل المتعلقة بالتربية' },
          {
            value: 'Z71',
            display: 'الأشخاص الذين يلجأون إلى الخدمات الصحية للتشاور والنصائح الطبية، غير مصنفة في مكان آخر',
          },
          { value: 'Z72', display: 'المشاكل المتعلقة بأسلوب الحياة' },
          { value: 'Z74', display: 'المشاكل المتعلقة بالاعتماد على الآلات والأجهزة المساعدة' },
          { value: 'A20', display: 'الطاعون' },
          { value: 'A28', display: 'أمراض بكتيرية حيوانية المصدر أخرى، غير مصنفة في مكان آخر' },
          { value: 'B03', display: 'جدري' },
          { value: 'B17', display: 'التهاب الكبد سي الحاد' },
          { value: 'C16', display: 'الورم الخبيث في المعدة' },
          { value: 'C91', display: 'لوكيميا لمفاوية حادة' },
          { value: 'D73', display: 'أمراض الطحال' },
          { value: 'E02', display: 'قصور الغدة الدرقية الناجم عن نقص اليود دون أعراض' },
          { value: 'E44', display: 'سوء التغذية البروتيني من الدرجة المعتدلة والخفيفة' },
          { value: 'F24', display: 'اضطراب نفسي مشترك' },
          { value: 'G51', display: 'شلل بيل' },
          { value: 'H65', display: 'التهاب الأذن الوسطى غير القيحي' },
          { value: 'I42', display: 'اعتلال عضلة القلب' },
          { value: 'J20', display: 'القصبات الهوائية الحادة' },
          { value: 'K05', display: 'التهاب اللثة وأمراض الفم' },
          { value: 'K12', display: 'التهاب الفم والآفات المرتبطة به' },
          { value: 'L03', display: 'التهاب النسيج الخلوي' },
          { value: 'M25', display: 'ألم المفصل' },
          { value: 'N41', display: 'الأمراض الالتهابية للبروستات' },
          { value: 'N76', display: 'التهابات أخرى في المهبل والفرج' },
          { value: 'O14', display: 'ارتفاع ضغط الدم الناتج عن الحمل' },
          { value: 'P01', display: 'اضطرابات الوليد المرتبطة بقصر مدة الحمل وانخفاض وزن الولادة' },
          { value: 'R05', display: 'السعال' },
          { value: 'R55', display: 'الإغماء والانهيار' },
          { value: 'S06', display: 'إصابة داخل الجمجمة' },
          { value: 'T36', display: 'التسمم بالمضادات الحيوية الجهازية' },
          { value: 'Z73', display: 'المشاكل المتعلقة بصعوبة إدارة الحياة' },
        ],
      },
      clinicalStatus: {
        formType: 'select',
        title: 'Clinical Status',
        options: [
          { id: 1, value: 'active', display: 'نشط' },
          { id: 2, value: 'recurrence', display: 'انتكاسة' },
          { id: 3, value: 'remission', display: 'سكون' },
          { id: 4, value: 'resolved', display: 'تم الحل' },
          { id: 5, value: 'inactive', display: 'غير نشط' },
          { id: 6, value: 'unknown', display: 'غير معروف' },
        ],
        default: 'active',
      },
      verificationStatus: {
        formType: 'select',
        title: 'Verification Status',
        options: [
          { id: 1, value: 'unconfirmed', display: 'غير مؤكد' },
          { id: 2, value: 'confirmed', display: 'مؤكد' },
          { id: 3, value: 'differential', display: 'تشخيص تفريقي' },
          { id: 4, value: 'provisional', display: 'مؤقت' },
          { id: 5, value: 'refuted', display: 'مرفوض' },
          { id: 6, value: 'entered-in-error', display: 'تم إدخاله بالخطأ' },
        ],
        default: 'unconfirmed',
      },
      severity: {
        formType: 'select',
        title: 'Severity',
        options: [
          { id: 1, value: 'mild', display: 'خفيف' },
          { id: 2, value: 'moderate', display: 'متوسط' },
          { id: 3, value: 'severe', display: 'شديد' },
        ],
        default: 'mild',
      },
      onsetDateTime: {
        formType: 'date',
        title: 'Onset Date',
        default: '"2022-01-01',
      },
    },
  ],

  [
    'Procedure',
    {
      status: {
        formType: 'select',
        title: 'Status',
        options: [
          { id: 1, value: 'preparation', display: 'تحضير' },
          { id: 2, value: 'in-progress', display: 'قيد التنفيذ' },
          { id: 3, value: 'not-done', display: 'لم يتم' },
          { id: 4, value: 'on-hold', display: 'قيد الانتظار' },
          { id: 5, value: 'completed', display: 'مكتمل' },
          { id: 6, value: 'entered-in-error', display: 'تم إدخاله بالخطأ' },
          { id: 7, value: 'stopped', display: 'توقف' },
          { id: 8, value: 'unknown', display: 'غير معروف' },
        ],
        default: 'preparation',
      },
      code: {
        formType: 'select',
        title: 'Code',
        options: [
          { value: '104001', display: 'استئصال آفة الرضفة' },
          { value: '115006', display: 'تركيب جهاز تقويم أسنان قابل للإزالة' },
          { value: '119000', display: 'استئصال الفص الجزئي الرئوي عبر التنظير الصدري' },
          { value: '121005', display: 'حقن علاج خلف مقلة العين' },
          { value: '128004', display: 'فحص جلد بواسطة مجهر يدوي' },
          { value: '133000', display: 'غرس القسطرة العصبية في العصبون العضلي عن طريق الجلد' },
          { value: '135007', display: 'بضع مفصل الرسغ مع استكشاف وخزعة' },
          { value: '142007', display: 'استئصال ورم من منطقة الكتف، عميق، عضلي' },
          { value: '146005', display: 'إصلاح عدم التئام مشط القدم مع طعم عظمي' },
          { value: '153001', display: 'تنظير المثانة والإحليل مع استئصال القيلة الحالبية' },
          { value: '160007', display: 'إزالة جسم غريب من الوتر و/أو غمد الوتر' },
          { value: '166001', display: 'العلاج السلوكي' },
          { value: '170009', display: 'اختبار قرص الفاعلية الخاص، فحص الفانكومايسين' },
          { value: '174000', display: 'عملية هاريسون-ريتشاردسون على المهبل' },
          { value: '176003', display: 'مفاغرة المستقيم' },
          { value: '189009', display: 'استئصال آفة من الشريان' },
          { value: '197002', display: 'اختبار التحول من العفن إلى الخميرة' },
          { value: '230009', display: 'عملية ميلر، تعليق الإحليل والمثانة' },
          { value: '243009', display: 'استبدال أنبوب البطين الدماغي' },
          { value: '245002', display: 'قطع العقدة العصبية' },
          { value: '262007', display: 'شفط حوض الكلى عن طريق الجلد' },
          { value: '267001', display: 'استئصال ناسور الشرج، متعدد' },
        ],
        default: procedureDictionary[0].value,
      },
      reasonCode: {
        formType: 'select',
        title: 'Reason Code',
        options: [
          { id: 1, value: 'Z00', display: 'الفحص العام' },
          { id: 2, value: 'Z01', display: 'الفحوصات الخاصة الأخرى' },
          { id: 3, value: 'Z02', display: 'الفحوصات لأغراض إدارية' },
          { id: 4, value: 'Z09', display: 'الفحص اللاحق بعد العلاج' },
          { id: 5, value: 'Z12', display: 'الفحص للكشف عن الأورام الخبيثة' },
          { id: 6, value: 'Z13', display: 'الفحص للكشف عن أمراض واضطرابات أخرى' },
          { id: 7, value: 'Z20', display: 'التماس والتعرض للأمراض المعدية' },
          { id: 8, value: 'Z30', display: 'إدارة وسائل منع الحمل' },
          { id: 9, value: 'Z31', display: 'التعامل مع تدابير الإنجاب' },
          { id: 10, value: 'Z33', display: 'الحمل العرضي' },
          { id: 11, value: 'Z34', display: 'الإشراف على الحمل الطبيعي' },
          { id: 12, value: 'Z35', display: 'الإشراف على الحمل عالي الخطورة' },
          { id: 13, value: 'Z36', display: 'الفحص السابق للولادة' },
          { id: 14, value: 'Z37', display: 'نتائج الولادة' },
          { id: 15, value: 'Z38', display: 'المواليد الأحياء حسب مكان الولادة' },
          { id: 16, value: 'Z39', display: 'الرعاية والفحص بعد الولادة' },
          { id: 17, value: 'Z40', display: 'الجراحة الوقائية' },
          { id: 18, value: 'Z42', display: 'المتابعة الجراحية للأورام' },
          { id: 19, value: 'Z43', display: 'العناية بالفتحات الاصطناعية' },
          { id: 20, value: 'Z44', display: 'تركيب وتعديل الأجهزة الخارجية الاصطناعية' },
          { id: 21, value: 'Z45', display: 'تعديل وإدارة الأجهزة المزروعة' },
          { id: 22, value: 'Z46', display: 'تركيب وتعديل الأجهزة الأخرى' },
          { id: 23, value: 'Z47', display: 'الرعاية الطبية بعد العمليات العظمية' },
          { id: 24, value: 'Z48', display: 'الرعاية اللاحقة للعمليات الجراحية الأخرى' },
          { id: 25, value: 'Z49', display: 'الرعاية التي تشمل الغسيل الكلوي' },
          { id: 26, value: 'Z50', display: 'الرعاية التي تشمل إعادة التأهيل' },
          { id: 27, value: 'Z51', display: 'الرعاية الطبية الأخرى' },
          { id: 28, value: 'Z52', display: 'المتبرعون بالأعضاء والأنسجة' },
          { id: 29, value: 'Z53', display: 'المواجهات للإجراءات غير المنفذة' },
          { id: 30, value: 'Z54', display: 'النقاهة' },
          { id: 31, value: 'Z55', display: 'المشكلات المتعلقة بالتعليم والمعرفة الأدبية' },
          { id: 32, value: 'Z56', display: 'المشكلات المتعلقة بالتوظيف والبطالة' },
          { id: 33, value: 'Z57', display: 'التعرض المهني لعوامل الخطر' },
          { id: 34, value: 'Z58', display: 'المشكلات المتعلقة بالبيئة الفيزيائية' },
          { id: 35, value: 'Z59', display: 'المشكلات المتعلقة بالسكن والظروف الاقتصادية' },
          { id: 36, value: 'Z60', display: 'المشكلات المتعلقة بالبيئة الاجتماعية' },
          { id: 37, value: 'Z61', display: 'المشكلات المتعلقة بالأحداث السلبية في الطفولة' },
          { id: 38, value: 'Z62', display: 'المشكلات المتعلقة بالتربية' },
          { id: 39, value: 'Z63', display: 'المشكلات الأخرى المتعلقة بالمجموعة الداعمة الأساسية' },
          { id: 40, value: 'Z64', display: 'المشكلات المتعلقة بظروف نفسية اجتماعية معينة' },
          { id: 41, value: 'Z65', display: 'المشكلات المتعلقة بظروف نفسية اجتماعية أخرى' },
          { id: 42, value: 'Z70', display: 'الاستشارة المتعلقة بالمواقف والسلوكيات الجنسية' },
          {
            id: 43,
            value: 'Z71',
            display: 'الأشخاص الذين يلجأون للخدمات الصحية للاستشارة والنصيحة',
          },
          { id: 44, value: 'Z72', display: 'المشكلات المتعلقة بنمط الحياة' },
          { id: 45, value: 'Z73', display: 'المشكلات المتعلقة بصعوبات إدارة الحياة' },
          { id: 46, value: 'Z74', display: 'المشكلات المتعلقة بالاعتماد على مقدمي الرعاية' },
          {
            id: 47,
            value: 'Z75',
            display: 'المشكلات المتعلقة بالمرافق الطبية والرعاية الصحية الأخرى',
          },
          { id: 48, value: 'Z76', display: 'الأشخاص الذين يلجأون للخدمات الصحية في ظروف أخرى' },
          { id: 49, value: 'Z80', display: 'تاريخ العائلة مع الأورام الخبيثة' },
          {
            id: 50,
            value: 'Z99',
            display: 'الاعتماد على الآلات والأجهزة المساعدة غير المصنفة في مكان آخر',
          },
        ],
        default: 'Z00',
      },
      performer: {
        formType: 'input',
        title: 'Performer',
      },
      performedDateTime: {
        formType: 'date',
        title: 'Performed Date',
      },
      location: {
        formType: 'input',
        title: 'Location',
      },
      outcome: {
        formType: 'input',
        title: 'Outcome',
      },
    },
  ],

  [
    'Encounter',
    {
      status: {
        formType: 'select',
        title: 'Status',
        options: [
          { id: 1, value: 'planned', display: 'مخطط له' },
          { id: 2, value: 'arrived', display: 'وصل' },
          { id: 3, value: 'triaged', display: 'فرز' },
          { id: 4, value: 'in-progress', display: 'قيد التنفيذ' },
          { id: 5, value: 'on-leave', display: 'في إجازة' },
          { id: 6, value: 'cancelled', display: 'ملغى' },
          { id: 7, value: 'entered-in-error', display: 'تم إدخاله بالخطأ' },
          { id: 8, value: 'unknown', display: 'غير معروف' },
        ],
        default: 'planned',
      },
      class: {
        formType: 'select',
        title: 'Class',
        options: [
          { id: 1, value: 'AMB', display: 'عيادات خارجية' },
          { id: 2, value: 'EMER', display: 'طوارئ' },
          { id: 3, value: 'IMP', display: 'مريض داخلي' },
          { id: 4, value: 'SS', display: 'إقامة قصيرة' },
        ],
        default: 'Inpatient',
      },
      period: {
        formType: 'date',
        title: 'Period',
      },
      reasonCode: {
        formType: 'select',
        title: 'Reason Code',
        options: [
          { id: 1, value: 'A09', display: 'إسهال معدي' },
          { id: 2, value: 'B20', display: 'فيروس العوز المناعي البشري' },
          { id: 3, value: 'C34', display: 'سرطان الرئة' },
          { id: 4, value: 'D50', display: 'نقص الحديد' },
          { id: 5, value: 'E11', display: 'داء السكري 2' },
          { id: 6, value: 'E66', display: 'السمنة' },
          { id: 7, value: 'F32', display: 'الاكتئاب' },
          { id: 8, value: 'G40', display: 'الصرع' },
          { id: 9, value: 'H10', display: 'التهاب الملتحمة' },
          { id: 10, value: 'I10', display: 'ارتفاع الضغط' },
          { id: 11, value: 'I20', display: 'الذبحة الصدرية' },
          { id: 12, value: 'I50', display: 'قصور القلب' },
          { id: 13, value: 'J06', display: 'التنفسي العلوي' },
          { id: 14, value: 'J18', display: 'الالتهاب الرئوي' },
          { id: 15, value: 'K29', display: 'التهاب المعدة' },
          { id: 16, value: 'L20', display: 'إكزيما' },
          { id: 17, value: 'M54', display: 'ألم الظهر' },
          { id: 18, value: 'N39', display: 'التهاب المسالك البولية' },
          { id: 19, value: 'O80', display: 'الولادة الطبيعية' },
          { id: 20, value: 'P03', display: 'مضاعفات الولادة' },
          { id: 21, value: 'Q00', display: 'عدم تكون الدماغ' },
          { id: 22, value: 'R10', display: 'ألم بطني' },
          { id: 23, value: 'R51', display: 'صداع' },
          { id: 24, value: 'S02', display: 'كسر الجمجمة' },
          { id: 25, value: 'T14', display: 'إصابة' },
          { id: 26, value: 'U07', display: 'كوفيد-19' },
          { id: 27, value: 'V01', display: 'إصابة المشاة' },
          { id: 28, value: 'W18', display: 'سقوط' },
          { id: 29, value: 'X00', display: 'التعرض للحريق' },
          { id: 30, value: 'Y35', display: 'التدخل القانوني' },
          { id: 31, value: 'Z00', display: 'الفحص العام' },
          { id: 32, value: 'Z04', display: 'ملاحظة بعد الحادث' },
          { id: 33, value: 'Z08', display: 'متابعة بعد العلاج' },
          { id: 34, value: 'Z12', display: 'فحص السرطان' },
          { id: 35, value: 'Z28', display: 'التحصين غير المنفذ' },
          { id: 36, value: 'Z30', display: 'إدارة موانع الحمل' },
          { id: 37, value: 'Z51', display: 'الرعاية الطبية' },
          { id: 38, value: 'Z71', display: 'النصيحة الطبية' },
          { id: 39, value: 'Z72', display: 'مشاكل نمط الحياة' },
          { id: 40, value: 'Z76', display: 'الشخص الذي يلجأ للخدمات الصحية' },
        ],
        default: 'A09',
      },
      location: {
        formType: 'input',
        title: 'Location',
      },

      hospitalization: {
        formType: 'select',
        title: 'Hospitalization',
        options: [
          { id: 1, value: 'None', display: 'لا شيء' },
          { id: 2, value: 'Planned', display: 'مخطط له' },
          { id: 3, value: 'Emergency', display: 'طوارئ' },
        ],
        default: 'None',
      },

      serviceProvider: {
        formType: 'input',
        title: 'Service Provider',
      },
      type: {
        formType: 'select',
        title: 'Type',
        options: [
          { id: 1, value: 'General Checkup', display: 'فحص عام' },
          { id: 2, value: 'Emergency', display: 'طوارئ' },
          { id: 3, value: 'Surgery', display: 'جراحة' },
        ],
        default: 'General Checkup',
      },
    },
  ],

  [
    'AllergyIntolerance',
    {
      code: {
        formType: 'select',
        title: 'Code',
        options: [
          { value: 'J30.1', display: 'التهاب الأنف التحسسي بسبب حبوب اللقاح' },
          { value: 'J30.2', display: 'التهاب الأنف التحسسي الموسمي الآخر' },
          { value: 'J30.81', display: 'التهاب الأنف التحسسي بسبب قشور الحيوانات' },
          { value: 'J30.89', display: 'التهاب الأنف التحسسي الآخر' },
          { value: 'L23.0', display: 'التهاب الجلد التماسي التحسسي بسبب المعادن' },
          { value: 'L23.6', display: 'التهاب الجلد التماسي التحسسي بسبب مستحضرات التجميل' },
          { value: 'L23.7', display: 'التهاب الجلد التماسي التحسسي بسبب النباتات' },
          { value: 'L23.81', display: 'التهاب الجلد التماسي التحسسي بسبب الحيوانات' },
          { value: 'L23.9', display: 'التهاب الجلد التماسي التحسسي غير محدد' },
          { value: 'L24.7', display: 'التهاب الجلد التماسي المزعج بسبب النباتات' },
          { value: 'L50.0', display: 'شرى تحسسي' },
          { value: 'L50.9', display: 'شرى غير محدد' },
          { value: 'T78.0', display: 'صدمة تأقية بسبب رد فعل غذائي سيئ' },
          { value: 'T78.01', display: 'رد فعل تأقي بسبب الفول السوداني' },
          { value: 'T78.02', display: 'رد فعل تأقي بسبب المأكولات البحرية' },
          { value: 'T78.1', display: 'ردود فعل غذائية سيئة أخرى' },
          { value: 'T78.2', display: 'صدمة تأقية غير محددة' },
          { value: 'T78.3', display: 'وذمة وعائية' },
          { value: 'T78.4', display: 'حساسية غير محددة' },
          { value: 'T88.6', display: 'صدمة تأقية بسبب تأثير سيئ لدواء صحيح' },
          { value: 'T88.7', display: 'صدمة تأقية بسبب مصل' },
          { value: 'T88.8', display: 'مضاعفات أخرى محددة للتحصين' },
          { value: 'V15.05', display: 'حساسية لوسائط التباين الإشعاعي' },
          { value: 'V15.06', display: 'حساسية للاتكس' },
          { value: 'V15.07', display: 'حساسية للدغات الحشرات' },
          { value: 'Z88.0', display: 'حساسية للبنسلين' },
          { value: 'Z88.1', display: 'حساسية لمضادات حيوية أخرى' },
          { value: 'Z88.2', display: 'حساسية للسلفوناميدات' },
          { value: 'Z88.3', display: 'حساسية لعوامل مضادة للعدوى أخرى' },
          { value: 'Z88.4', display: 'حساسية لعوامل التخدير' },
          { value: 'Z88.5', display: 'حساسية للمواد المخدرة' },
          { value: 'Z88.6', display: 'حساسية لعوامل مسكنة' },
          { value: 'Z88.7', display: 'حساسية للمصل واللقاح' },
          { value: 'Z88.8', display: 'حساسية لأدوية وعقاقير ومواد بيولوجية أخرى' },
          { value: 'Z88.9', display: 'حساسية لأدوية وعقاقير ومواد بيولوجية غير محددة' },
          { value: 'Z91.010', display: 'حساسية للفول السوداني' },
          { value: 'Z91.011', display: 'حساسية لمنتجات الألبان' },
          { value: 'Z91.012', display: 'حساسية للبيض' },
          { value: 'Z91.013', display: 'حساسية للمكسرات' },
          { value: 'Z91.014', display: 'حساسية للمأكولات البحرية' },
        ],
      },
      clinicalStatus: {
        formType: 'select',
        title: 'Clinical Status',
        options: [
          { id: 1, value: 'active', display: 'نشط' },
          { id: 2, value: 'inactive', display: 'غير نشط' },
          { id: 3, value: 'resolved', display: 'تم الحل' },
          ,
        ],
        default: 'active',
      },
      verificationStatus: {
        formType: 'select',
        title: 'Verification Status',
        options: [
          { id: 1, value: 'unconfirmed', display: 'غير مؤكد' },
          { id: 2, value: 'confirmed', display: 'مؤكد' },
          { id: 3, value: 'refuted', display: 'مرفوض' },
          { id: 4, value: 'entered-in-error', display: 'تم إدخاله بالخطأ' },
        ],
        default: 'unconfirmed',
      },
      category: {
        formType: 'select',
        title: 'Category',
        options: [
          { id: 1, value: 'food', display: 'طعام' },
          { id: 2, value: 'medication', display: 'دواء' },
          { id: 3, value: 'environment', display: 'بيئة' },
          { id: 4, value: 'biologic', display: 'بيولوجي' },
        ],
        default: 'food',
      },
      criticality: {
        formType: 'select',
        title: 'Criticality',
        options: [
          { id: 1, value: 'low', display: 'منخفض' },
          { id: 2, value: 'high', display: 'مرتفع' },
          { id: 3, value: 'unable-to-assess', display: 'غير قادر على التقييم' },
        ],
        default: 'low',
      },
      onsetDateTime: {
        formType: 'date',
        title: 'Onset Date',
        default: '2022-01-01T00:00:00Z',
      },
      reaction: {
        formType: 'input',
        title: 'Reaction',
      },
    },
  ],

  [
    'FamilyMemberHistory',
    {
      relationship: {
        formType: 'select',
        title: 'Relationship',
        options: [
          { value: '127940007', display: 'والد/والدة' },
          { value: '126830008', display: 'شقيق/شقيقة' },
          { value: '127850005', display: 'طفل/طفلة' },
          { value: '127930003', display: 'جد/جدة من جهة الأم' },
          { value: '127920004', display: 'جد/جدة من جهة الأب' },
          { value: '127910009', display: 'عمة' },
          { value: '127900000', display: 'خالة' },
          { value: '127890008', display: 'خال' },
          { value: '127880007', display: 'عم' },
          { value: '127870003', display: 'ابن عم/ابن خال' },
          { value: '127860009', display: 'ابنة عم/ابنة خال' },
          { value: '429000000', display: 'والد/والدة زوج أو زوجة' },
          { value: '428900009', display: 'أخ/أخت زوج أو زوجة' },
          { value: '428800004', display: 'ابن/ابنة زوج أو زوجة' },
          { value: '128100014', display: 'أب' },
          { value: '128080000', display: 'أم' },
          { value: '309090004', display: 'أخ غير شقيق/أخت غير شقيقة' },
          { value: '407940001', display: 'حما' },
          { value: '407950000', display: 'حماة' },
          { value: '427900006', display: 'صهر' },
          { value: '407930006', display: 'كنة' },
          { value: '427920001', display: 'أخو زوج/أخو زوجة' },
          { value: '427910006', display: 'أخت زوج/أخت زوجة' },
          { value: '127840000', display: 'والد حاضن/والدة حاضنة' },
          { value: '127830001', display: 'طفل حاضن/طفلة حاضنة' },
          { value: '128000009', display: 'والد/والدة بالتبني' },
          { value: '127990001', display: 'طفل بالتبني/طفلة بالتبني' },
        ],
        default: '127940007',
      },
      date: {
        formType: 'date',
        title: 'Date',
      },
      age: {
        formType: 'number',
        title: 'Age',
      },
      /*deceasedBoolean: {
        formType: "boolean",
        title: "Deceased",
        default: false,
      },*/
      deceasedDate: {
        formType: 'date',
        title: 'Deceased Date',
      },
      sex: {
        formType: 'select',
        title: 'Select Gender',
        options: [
          { id: 1, value: 'male', display: 'ذكر' },
          { id: 2, value: 'female', display: 'أنثى' },
        ],
        default: 'ذكر',
      },
      reason: {
        formType: 'input',
        title: 'Reason',
      },
    },
  ],

  [
    'MedicationStatement',
    {
      status: 'select',
      dateAsserted: 'date',
      reasonCode: 'select',
      dosage: 'number',
      category: 'select',
      note: 'input',
      medicationReference: 'select',
    },
  ],

  [
    'Observation',
    {
      code: {
        formType: 'select',
        title: 'Code',
        options: [
          { value: '8867-4', display: 'معدل ضربات القلب' },
          { value: '2708-6', display: 'تشبع الأكسجين في الدم الشرياني بواسطة مقياس الأكسجة' },
          { value: '55284-4', display: 'ضغط الدم الانقباضي والانبساطي' },
          { value: '29463-7', display: 'وزن الجسم' },
          { value: '8302-2', display: 'طول الجسم' },
          {
            value: '2085-9',
            display: 'الكوليسترول في البروتين الدهني عالي الكثافة [كتلة/حجم] في المصل أو البلازما',
          },
          { value: '18262-6', display: 'مؤشر كتلة الجسم (BMI) [نسبة]' },
          { value: '789-8', display: 'خلايا الدم الحمراء [عدد/حجم] في الدم عن طريق العد الآلي' },
          { value: '718-7', display: 'الهيموغلوبين [كتلة/حجم] في الدم' },
          { value: '4548-4', display: 'الهيموغلوبين A1c/الهيموغلوبين الكلي في الدم' },
        ],
      },
      status: {
        formType: 'select',
        title: 'Status',
        options: [
          { value: 'registered', display: 'مسجل' },
          { value: 'preliminary', display: 'أولي' },
          { value: 'final', display: 'نهائي' },
          { value: 'amended', display: 'معدل' },
          { value: 'corrected', display: 'مصحح' },
          { value: 'cancelled', display: 'ملغى' },
          { value: 'entered-in-error', display: 'تم إدخاله بالخطأ' },
          { value: 'unknown', display: 'غير معروف' },
        ],
        default: 'registered',
      },
      effectiveDateTime: {
        formType: 'date',
        title: 'Effective Date',
      },
      valueQuantity: {
        formType: 'number',
        title: 'Value Quantity',
      },
    },
  ],

  [
    'Immunization',
    {
      vaccineCode: {
        formType: 'select',
        title: 'Vaccine Code',
        options: [
          { value: '0', display: 'لقاح الإنفلونزا' },
          { value: '1', display: 'لقاح الحصبة والنكاف والحصبة الألمانية' },
          { value: '2', display: 'لقاح التهاب الكبد ب' },
          { value: '3', display: 'لقاح الكزاز' },
          { value: '4', display: 'لقاح الدفتيريا' },
          { value: '5', display: 'لقاح السعال الديكي' },
          { value: '6', display: 'لقاح شلل الأطفال' },
          { value: '7', display: 'لقاح الالتهاب الرئوي' },
          { value: '8', display: 'لقاح الروتا فيروس' },
          { value: '9', display: 'لقاح جدري الماء' },
          { value: '10', display: 'لقاح فيروس الورم الحليمي البشري' },
          { value: '11', display: 'لقاح السحائي' },
          { value: '12', display: 'لقاح التهاب الكبد أ' },
          { value: '13', display: 'لقاح هيموفيلوس إنفلونزا ب' },
          { value: '14', display: 'لقاح داء الكلب' },
          { value: '15', display: 'لقاح التيفوئيد' },
          { value: '16', display: 'لقاح الحمى الصفراء' },
          { value: '17', display: 'لقاح الهربس النطاقي' },
          { value: '18', display: 'لقاح السل (بي سي جي)' },
          { value: '19', display: 'لقاح التهاب الدماغ الياباني' },
          { value: '20', display: 'لقاح الكوليرا' },
          { value: '21', display: 'لقاح داء الكلب' },
          { value: '22', display: 'لقاح الجمرة الخبيثة' },
          { value: '23', display: 'لقاح الجدري' },
          { value: '24', display: 'لقاح التيفوس' },
          { value: '25', display: 'لقاح الملاريا' },
          { value: '26', display: 'لقاح حمى الضنك' },
          { value: '27', display: 'لقاح فيروس زيكا' },
          { value: '28', display: 'لقاح الإنفلونزا ب' },
          { value: '29', display: 'لقاح الدمج دي تي بي-هيب ب-هيب' },
          { value: '30', display: 'لقاح شلل الأطفال الفموي' },
          { value: '31', display: 'لقاح شلل الأطفال غير المُفعل' },
          { value: '32', display: 'لقاح الحصبة والنكاف والحصبة الألمانية وجدري الماء' },
          { value: '33', display: 'لقاح الدفتيريا والكزاز والسعال الديكي' },
          { value: '34', display: 'لقاح الكزاز والدفتيريا والسعال الديكي' },
          { value: '35', display: 'لقاح إنفلونزا إتش1إن1 (إنفلونزا الخنازير)' },
          { value: '36', display: 'لقاح الإنفلونزا الموسمية' },
          { value: '37', display: 'لقاح الإنفلونزا الأنفي' },
          { value: '38', display: 'لقاح الالتهاب الرئوي البوليسكاريدي للبالغين' },
          { value: '39', display: 'لقاح الالتهاب الرئوي المقترن للأطفال' },
          { value: '40', display: 'لقاح الحزام الناري' },
          { value: '41', display: 'لقاح الإنفلونزا الموهن الحي' },
          { value: '42', display: 'لقاح الإنفلونزا المُعاد تركيبه' },
          { value: '43', display: 'لقاحات السفر' },
          { value: '44', display: 'لقاح التهاب الكبد س' },
          { value: '45', display: 'لقاح إتش بي في 9 (جارداسيل 9)' },
          { value: '46', display: 'لقاح السحائي ب' },
          { value: '47', display: 'لقاح السحائي ACWY' },
          { value: '48', display: 'لقاح روتا تيك للروتا فيروس' },
          { value: '49', display: 'لقاح إنفانريكس هيكسا (6 في 1)' },
        ],
      },
      status: {
        formType: 'select',
        title: 'Status',
        options: [
          { value: 'completed', display: 'مكتمل' },
          { value: 'entered-in-error', display: 'تم إدخاله بالخطأ' },
          { value: 'not-done', display: 'لم يتم' },
        ],
        default: 'completed',
      },
      occurrenceDateTime: {
        formType: 'date',
        title: 'Date',
      },
      location: {
        formType: 'input',
        title: 'Location',
      },
      manufacturer: {
        formType: 'input',
        title: 'Manufacturer',
      },
      lotNumber: {
        formType: 'input',
        title: 'Lot Number',
      },
      expirationDate: {
        formType: 'date',
        title: 'Expiration Date',
      },
      site: {
        formType: 'select',
        title: 'Site',
        options: [
          { value: 'LA', display: 'الذراع الأيسر' },
          { value: 'RA', display: 'الذراع الأيمن' },
        ],
        default: 'LA',
      },
      doseQuantity: {
        formType: 'number',
        title: 'Dose Quantity',
      },
    },
  ],

  [
    'AdverseEvent',
    {
      category: {
        formType: 'select',
        title: 'Category',
        options: [
          { id: 1, value: 'product-problem', display: 'مشكلة في المنتج' },
          { id: 2, value: 'product-quality', display: 'جودة المنتج' },
          { id: 3, value: 'product-use-error', display: 'خطأ في استخدام المنتج' },
          { id: 4, value: 'wrong-dose', display: 'جرعة خاطئة' },
          { id: 5, value: 'incorrect-prescribing-information', display: 'معلومات وصفة غير صحيحة' },
          { id: 6, value: 'wrong-technique', display: 'طريقة خاطئة' },
          { id: 7, value: 'wrong-route-of-administration', display: 'طريق إعطاء خاطئ' },
          { id: 8, value: 'wrong-rate', display: 'معدل خاطئ' },
          { id: 9, value: 'wrong-duration', display: 'مدة خاطئة' },
          { id: 10, value: 'wrong-time', display: 'وقت خاطئ' },
          { id: 11, value: 'expired-drug', display: 'دواء منتهي الصلاحية' },
          { id: 12, value: 'medical-device-use-error', display: 'خطأ في استخدام الجهاز الطبي' },
          {
            id: 13,
            value: 'problem-different-manufacturer',
            display: 'مشكلة - شركة مصنّعة مختلفة',
          },
          { id: 14, value: 'unsafe-physical-environment', display: 'بيئة مادية غير آمنة' },
        ],
        default: 'product-problem',
      },
      actuality: {
        formType: 'select',
        title: 'Actuality',
        options: [
          { id: 1, value: 'actual', display: 'فعلي' },
          { id: 2, value: 'potential', display: 'محتمل' },
        ],
        default: 'actual',
      },
      date: {
        formType: 'date',
        title: 'Date',
      },
      location: {
        formType: 'input',
        title: 'Location',
      },
      seriousness: {
        formType: 'select',
        title: 'Seriousness',
        options: [
          { id: 1, value: 'Non-Serious', display: 'غير خطير' },
          { id: 2, value: 'Serious', display: 'خطير' },
          { id: 3, value: 'SeriousResultsInDeath', display: 'خطير يؤدي إلى الوفاة' },
        ],
        default: 'Non-Serious',
      },
      outcome: {
        formType: 'select',
        title: 'Outcome',
        options: [
          { id: 1, value: 'recovered', display: 'تعافى' },
          { id: 2, value: 'recovering', display: 'يتعافى' },
          { id: 3, value: 'fatal', display: 'قاتل' },
          { id: 4, value: 'not-recovered', display: 'لم يتعافَ' },
          { id: 5, value: 'unknown', display: 'غير معروف' },
        ],
        default: 'recovered',
      },
      contributingFactor: {
        formType: 'input',
        title: 'Contributing Factor',
      },
    },
  ],

  [
    'SocialHistory',
    {
      economicStatus: {
        formType: 'select',
        title: 'Economic Status',
        options: [
          { value: 'Low', display: 'منخفض' },
          { value: 'LowerMiddle', display: 'أقل من المتوسط' },
          { value: 'Middle', display: 'متوسط' },
          { value: 'UpperMiddle', display: 'أعلى من المتوسط' },
          { value: 'High', display: 'مرتفع' },
        ],
        default: 'Middle Class',
      },
      highestLevelOfEducation: {
        formType: 'select',
        title: 'Highest Level Of Education',
        options: [
          { value: 'NoFormalEducation', display: 'بدون تعليم رسمي' },
          { value: 'PrimaryEducation', display: 'التعليم الابتدائي' },
          { value: 'SecondaryEducation', display: 'التعليم الثانوي' },
          { value: 'VocationalTraining', display: 'التدريب المهني' },
          { value: 'AssociateDegree', display: 'درجة جامعية متوسطة' },
          { value: 'BachelorDegree', display: 'درجة البكالوريوس' },
          { value: 'GraduateDegree', display: 'درجة الدراسات العليا' },
        ],
        default: 'College',
      },
      physicalActivity: {
        formType: 'select',
        title: 'Physical Activity',
        options: [
          { value: 'Sedentary', display: 'خامل' },
          { value: 'Light', display: 'خفيف' },
          { value: 'Moderate', display: 'متوسط' },
          { value: 'Active', display: 'نشط' },
          { value: 'VigorouslyActive', display: 'نشط للغاية' },
        ],
        default: 'Moderate',
      },
      dietAndNutrition: {
        formType: 'select',
        title: 'Diet And Nutrition',
        options: [
          { value: 'Poor', display: 'ضعيف' },
          { value: 'Average', display: 'متوسط' },
          { value: 'Good', display: 'جيد' },
          { value: 'Excellent', display: 'ممتاز' },
        ],
        default: 'Average',
      },
      substanceUse: {
        formType: 'select',
        title: 'Substance Use',
        options: [
          { value: 'None', display: 'لا شيء' },
          { value: 'Alcohol', display: 'الكحول' },
          { value: 'Tobacco', display: 'التبغ' },
          { value: 'RecreationalDrugs', display: 'المخدرات الترفيهية' },
        ],
        default: 'None',
      },
      stressAndCoping: {
        formType: 'select',
        title: 'Stress And Coping',
        options: [
          { value: 'Low', display: 'منخفض' },
          { value: 'Moderate', display: 'متوسط' },
          { value: 'High', display: 'مرتفع' },
        ],
        default: 'Moderate',
      },
    },
  ],
]);

export type Patient = {
  id?: string;
  resourceType: 'Patient';
  giveName: string;
  familyName: string;
  telecom: string;
  homeNumber?: string;
  gender: string;
  birthDate: string;
  deceasedBoolean?: boolean;
  deceasedDateTime?: string;
  photo?: string;
  relationship?: string;
  contactFamilyName?: string;
  contactGivenName?: string;
  contactGender?: string;
  contactTelecom?: string;
  language?: string; //default: "en"
  preferred?: boolean;
};

// new approach
export const FormSchema = z.object({
  patient: z.object({
    id: z.string().optional(),
    resourceType: z.literal('Patient'),
    givenName: z.string().min(2, { message: 'Name should be at least 2 character long' }),
    familyName: z
      .string({
        required_error: 'Family Name is Required',
      })
      .min(2, { message: 'Name should be at least 2 character long' }),
    telecom: z.string().min(10, { message: 'Phone number should be at least 10 character long' }),
    homeNumber: z.string().optional(),
    gender: z.enum(['male', 'female', 'other', 'unknown']),
    birthDate: z.string().datetime(),
    //deceasedBoolean: z.boolean().default(false).optional(),
    //deceasedDateTime: z.string().datetime().optional(),
    //photo: z.string().optional(),
    // relationship: z.string().optional(),
    //contactFamilyName: z.string().optional(),
    //contactGivenName: z.string().optional(),
    //contactGender: z.enum(["male", "female", "other", "unknown"]).optional(),
    //contactTelecom: z.string().optional(),
    //language: z.string().default("en"),
    //preferred: z.boolean().default(false),
  }),
  conditions: z
    .array(
      z.object({
        id: z.string().optional(),
        resourceType: z.literal('Condition'),
        code: z.string({
          required_error: 'Condition Code is Required',
        }), // <-- code
        clinicalStatus: z
          .enum(['active', 'relapse', 'inactive', 'recurrence', 'remission', 'resolved'])
          .default('active'),
        verificationStatus: z
          .enum(['unconfirmed', 'confirmed', 'provisional', 'differential', 'refuted', 'entered-in-error'])
          .default('unconfirmed'),
        severity: z.enum(['mild', 'moderate', 'severe']).default('mild'),
        onsetDateTime: z
          .string()
          .datetime({
            message: 'Date should be in valid format',
          })
          .optional(),
      })
    )
    .optional(),
  procedures: z
    .array(
      z.object({
        id: z.string().optional(),
        resourceType: z.string().default('Procedure'),
        code: z.string({
          required_error: 'Procedure Code is required',
        }), // <---
        status: z
          .enum([
            'preparation',
            'in-progress',
            'not-done',
            'on-hold',
            'completed',
            'entered-in-error',
            'stopped',
            'unknown',
          ])
          .default('preparation'),
        reasonCode: z.string().optional(),
        performer: z.string().optional(),
        performedDateTime: z.string().datetime().nullable(),
        location: z.string().optional(),
        outcome: z.string().optional(),
      })
    )
    .optional(),
  encounters: z
    .array(
      z.object({
        id: z.string().optional(),
        resourceType: z.string().default('Encounter'),
        status: z
          .enum([
            'planned',
            'arrived',
            'triaged',
            'in-progress',
            'onleave',
            'finished',
            'cancelled',
            'entered-in-error',
            'unknown',
          ])
          .default('planned'),
        class: z.string({
          required_error: 'Encounter Class is required',
        }), // <--- code
        period: z
          .string()
          .datetime({
            message: 'Date should be in valid format',
          })
          .optional(), // <,
        type: z.enum(['General Checkup', 'Emergency', 'Surgery']).default('General Checkup'), // <--- code
        /*period: object({
        start: z.string().datetime().nullable(),
        end: z.string().datetime().nullable(),
      }),*/
        reasonCode: z.string(),
        location: z.string().optional(),
        hospitalization: z.string().optional(), //reference to location/organization...?
        serviceProvider: z.string().optional(), //reference to organization
      })
    )
    .optional(),
  allergyIntolerances: z
    .array(
      z.object({
        id: z.string().optional(),
        resourceType: z.string().default('AllergyIntolerance'),
        code: z.string({
          required_error: 'Allergy Intolerance Code is required',
        }),
        clinicalStatus: z.enum(['active', 'inactive', 'resolved']).default('active'),
        verificationStatus: z.enum(['unconfirmed', 'confirmed', 'refuted', 'entered-in-error']).default('unconfirmed'),
        category: z.enum(['food', 'medication', 'environment', 'biologic']).default('food'),
        criticality: z.enum(['low', 'high', 'unable-to-assess']).default('low'),
        onsetDateTime: z
          .string()
          .datetime({
            message: 'Date should be in valid format',
          })
          .optional(),
        reaction: z.string().optional(),
      })
    )
    .optional(),
  familyMemberHistories: z
    .array(
      z.object({
        id: z.string().optional(),
        resourceType: z.string().default('FamilyMemberHistory'),
        relationship: z.string(), // <--- code http://terminology.hl7.org/CodeSystem/v3-RoleCode
        date: z
          .string()
          .datetime({
            message: 'Date should be in valid format',
          })
          .optional(),
        age: z.coerce.number().optional(),
        deceasedBoolean: z.boolean().default(false),
        deceasedDate: z
          .string()
          .datetime({
            message: 'Date should be in valid format',
          })
          .optional(),
        sex: z.enum(['male', 'female', 'other', 'unknown']),
        reason: z.string().optional(),
      })
    )
    .optional(),
  observations: z
    .array(
      z.object({
        id: z.string().optional(),
        resourceType: z.string().default('Observation'),
        code: z.string(), // <--- code http://loinc.org
        status: z
          .enum([
            'registered',
            'preliminary',
            'final',
            'amended',
            'corrected',
            'cancelled',
            'entered-in-error',
            'unknown',
          ])
          .default('registered'), // <--- code http://hl7.org/fhir/observation-status
        effectiveDateTime: z
          .string()
          .datetime({
            message: 'Date should be in valid format',
          })
          .optional(),
        valueQuantity: z.coerce.number().optional(),
      })
    )
    .optional(),
  immunizations: z
    .array(
      z.object({
        id: z.string().optional(),
        resourceType: z.string().default('Immunization'),
        vaccineCode: z.string(), // <--- code http://hl7.org/fhir/sid/cvx
        status: z.enum(['completed', 'entered-in-error', 'not-done']).default('completed'),
        occurrenceDateTime: z
          .string()
          .datetime({
            message: 'Date should be in valid format',
          })
          .optional(),
        location: z.string().optional(), // reference to location
        manufacturer: z.string().optional(), // reference to organization
        lotNumber: z.string().optional(),
        expirationDate: z
          .string()
          .datetime({
            message: 'Date should be in valid format',
          })
          .optional(), //Date
        site: z.enum(['LA', 'RA']).default('LA'), // <--- code  http://terminology.hl7.org/CodeSystem/v3-ActSite
        doseQuantity: z.coerce.number().optional(),
      })
    )
    .optional(),
  adverseEvents: z
    .array(
      z.object({
        id: z.string().optional(),
        resourceType: z.string().default('AdverseEvent'),
        actuality: z.enum(['actual', 'potential']).default('actual'),
        category: z.enum([
          'product-problem',
          'product-quality',
          'product-use-error,',
          'wrong-dose',
          'incorrect-prescribing-information',
          'wrong-technique',
          'wrong-route-of-administration',
          'wrong-rate',
          'wrong-duration',
          'wrong-time',
          'expired-drug',
          'medical-device-use-error',
          'problem-different-manufacturer',
          'unsafe-physical-environment',
        ]),
        date: z
          .string()
          .datetime({
            message: 'Date should be in valid format',
          })
          .optional(),
        location: z.string().optional(), // reference to location
        seriousness: z
          .enum([
            'Non-Serious',
            'Serious',
            'SeriousResultsInDeath',
            'SeriousIsLifeThreatening',
            'SeriousResultsInHospitalization',
            'SeriousResultsInDisability',
            'SeriousIsBirthDefect',
            'SeriousRequiresPreventImpairment',
          ])
          .default('Non-Serious'), // <--- code http://terminology.hl7.org/CodeSystem/adverse-event-seriousness
        outcome: z
          .enum(['recovered', 'recovering', 'fatal', 'ongoing', 'resolvedWithSequelae ', 'unknown']) //<--- code http://terminology.hl7.org/CodeSystem/adverse-event-outcome
          .default('recovered'),
        contributingFactor: z.string().optional(),
      })
    )
    .optional(),
  medicationStatement: z
    .object({
      id: z.string().optional(),
      resourceType: z.string().default('MedicationStatement'),
      status: z.string().min(1, {
        message: 'At least one category should be selected',
      }),
      dateAsserted: z.string().datetime({
        message: 'Date should be in valid format',
      }),
      reasonCode: z.string().min(1, {
        message: 'At least one reason code should be selected',
      }), // <--- code http://snomed.info/sct
      dosage: z.coerce.number().optional(),
      category: z.string().min(1, {
        message: 'At least one category should be selected',
      }), // <--- code http://terminology.hl7.org/CodeSystem/medication-statement-category
      note: z.string().optional(),
      reasonReference: z.string().optional(), // reference to condition or observation or other
      valid: z.boolean().default(true),
    })
    .optional(),
  socialHistory: z.object({
    id: z.string().optional(),
    resourceType: z.literal('Basic'),
    economicStatus: z.string().min(2, { message: 'Economics status should be selected' }),
    highestLevelOfEducation: z.string().min(2, { message: 'Highest level of education should be selected' }),
    physicalActivity: z.string().min(2, { message: 'Physical activity should be selected' }),
    dietAndNutrition: z.string().min(2, { message: 'Diet and nutrition should be selected' }),
    substanceUse: z.string().min(2, { message: 'Substance use should be selected' }),
    stressAndCoping: z.string().min(2, { message: 'Stress and coping should be selected' }),
  }),
  consent: z.object({
    consentDataCollection: z.boolean(),
    gdprCompliance: z.boolean(),
    gdprProcessingAgreement: z.boolean(),
    hipaaCompliance: z.boolean(),
    hipaaConsent: z.boolean(),
    dataSharing: z.boolean(),
    rightToWithdraw: z.boolean(),
    confidentialityAgreement: z.boolean(),
    dataRetentionPolicy: z.boolean(),
    termsAndConditions: z.boolean(),
    privacyPolicy: z.boolean(),
    dnaCollectionConsent: z.boolean(),
  }),
});

export const schemaDefaultValues: BundleResourceType = {
  consent: {
    consentDataCollection: true,
    gdprCompliance: true,
    gdprProcessingAgreement: true,
    hipaaCompliance: true,
    hipaaConsent: true,
    dataSharing: true,
    rightToWithdraw: true,
    confidentialityAgreement: true,
    dataRetentionPolicy: true,
    termsAndConditions: true,
    privacyPolicy: true,
    dnaCollectionConsent: true,
  },

  patient: {
    resourceType: 'Patient',
    givenName: '',
    familyName: '',
    telecom: '',
    homeNumber: '',
    gender: '',
    birthDate: '',

    //deceasedBoolean: false,
    //deceasedDateTime: "",
    //photo: "https://example.com/photo.jpg",
    //relationship: "brother",
    //contactFamilyName: "Doe",
    //contactGivenName: "Jhon",
    //contactGender: "male",
    //contactTelecom: "+1234567890",
    //language: "en",
    //preferred: false,
  },

  conditions: [
    {
      resourceType: 'Condition',
      code: '',
      clinicalStatus: '',
      verificationStatus: '',
      severity: '',
      onsetDateTime: '',
    },
  ],

  procedures: [
    {
      resourceType: 'Procedure',
      status: '',
      code: '',
      reasonCode: '',
      performer: '',
      performedDateTime: '',
      location: '',
      outcome: '',
    },
  ],

  encounters: [
    {
      resourceType: 'Encounter',
      status: '',
      class: '',
      type: '',
      period: '',
      reasonCode: '',
      location: '',
      hospitalization: '',
      serviceProvider: '',
    },
  ],

  allergyIntolerances: [
    {
      resourceType: 'AllergyIntolerance',
      code: '',
      clinicalStatus: '',
      verificationStatus: '',
      category: '',
      criticality: '',
      onsetDateTime: '',
      reaction: '',
    },
  ],

  familyMemberHistories: [
    {
      resourceType: 'FamilyMemberHistory',
      relationship: '',
      status: '',
      date: '',
      age: undefined,
      deceasedBoolean: false,
      deceasedDate: '',
      sex: 'male',
      reason: '',
    },
  ],

  observations: [
    {
      resourceType: 'Observation',
      code: '',
      status: 'unknown',
      effectiveDateTime: '',
      valueQuantity: undefined,
    },
  ],

  immunizations: [
    {
      resourceType: 'Immunization',
      vaccineCode: '',
      status: 'completed',
      occurrenceDateTime: '',
      location: '', //
      manufacturer: '',
      lotNumber: '',
      expirationDate: '',
      site: 'LA',
      doseQuantity: undefined,
    },
  ],

  adverseEvents: [
    {
      resourceType: 'AdverseEvent',
      category: 'wrong-dose',
      actuality: 'actual',
      date: '',
      location: '',
      seriousness: 'Serious',
      outcome: 'unknown',
      contributingFactor: '',
    },
  ],

  medicationStatement: {
    resourceType: 'MedicationStatement',
    status: '',
    dateAsserted: '',
    reasonCode: '',
    dosage: undefined,
    category: '',
    note: '',
    medicationReference: '',
  },

  socialHistory: {
    resourceType: 'Basic',
    economicStatus: '',
    highestLevelOfEducation: '',
    physicalActivity: '',
    dietAndNutrition: '',
    substanceUse: [],
    stressAndCoping: '',
  },
};

export const schemaDefaultValues1: BundleResourceType = {
  consent: {
    consentDataCollection: true,
    gdprCompliance: true,
    gdprProcessingAgreement: true,
    hipaaCompliance: true,
    hipaaConsent: true,
    dataSharing: true,
    rightToWithdraw: true,
    confidentialityAgreement: true,
    dataRetentionPolicy: true,
    termsAndConditions: true,
    privacyPolicy: true,
    dnaCollectionConsent: true,
  },

  patient: {
    resourceType: 'Patient',
    givenName: 'Jhon',
    familyName: 'Doe',
    telecom: '',
    homeNumber: '124',
    gender: 'male',
    birthDate: '1990-01-01T00:00:00Z',

    //deceasedBoolean: false,
    //deceasedDateTime: "",
    //photo: "https://example.com/photo.jpg",
    //relationship: "brother",
    //contactFamilyName: "Doe",
    //contactGivenName: "Jhon",
    //contactGender: "male",
    //contactTelecom: "+1234567890",
    //language: "en",
    //preferred: false,
  },

  conditions: [
    {
      resourceType: 'Condition',
      code: 'J06',
      clinicalStatus: 'active',
      severity: 'mild',
      verificationStatus: '',
      onsetDateTime: '',
    },
  ],

  procedures: [
    {
      resourceType: 'Procedure',
      status: 'preparation',
      code: '104001',
      reasonCode: '',
      performer: '',
      performedDateTime: '',
      location: '',
      outcome: '',
    },
  ],

  encounters: [
    {
      resourceType: 'Encounter',
      status: 'planned',
      class: 'EMER',
      type: 'General Checkup',
      reasonCode: 'A09',
      period: '',
      hospitalization: 'None',
      location: '',
      serviceProvider: '',
    },
  ],

  allergyIntolerances: [
    {
      resourceType: 'AllergyIntolerance',
      code: 'J30.1',
      clinicalStatus: 'active',
      verificationStatus: '',
      category: 'food',
      criticality: 'low',
      onsetDateTime: '',
      reaction: '',
    },
  ],

  familyMemberHistories: [
    {
      resourceType: 'FamilyMemberHistory',
      relationship: '127940007',
      status: 'completed',
      date: '2024-04-09T21:00:00.000Z',
      age: undefined,
      deceasedBoolean: false,
      deceasedDate: '',
      sex: '',
      reason: '',
    },
  ],

  observations: [
    {
      resourceType: 'Observation',
      code: 'J06',
      status: 'registered',
      effectiveDateTime: '',
      valueQuantity: undefined,
    },
  ],

  immunizations: [
    {
      resourceType: 'Immunization',
      vaccineCode: '0',
      status: 'completed',
      site: 'LA',
      occurrenceDateTime: '',
      location: '', //
      manufacturer: '',
      lotNumber: '',
      expirationDate: '',
      doseQuantity: undefined,
    },
  ],

  adverseEvents: [
    {
      resourceType: 'AdverseEvent',
      actuality: 'actual',
      seriousness: 'Non-Serious',
      outcome: 'recovered',
      category: '',
      date: '',
      location: '',
      contributingFactor: '',
    },
  ],

  medicationStatement: {
    resourceType: 'MedicationStatement',
    status: 'active',
    dateAsserted: '2022-01-01T00:00:00Z',
    reasonCode: 'I10',
    dosage: 12,
    category: 'inpatient',
    note: 'Some note',
    medicationReference: '',
  },

  socialHistory: {
    resourceType: 'Basic',
    economicStatus: 'Low',
    highestLevelOfEducation: 'NoFormalEducation',
    physicalActivity: 'Sedentary',
    dietAndNutrition: 'Poor',
    substanceUse: ['None'],
    stressAndCoping: 'Low',
  },
};
