const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type invoice {
    OrderId: String
    OrderDate: String
  }

  type alertcount {
    SiteId: String
    TotalAlerts: Int
    TotalNonViewedAlerts: Int
    NewTotalAlerts: Int
    NewNonViewedAlerts: Int
    InProgressTotalAlerts: Int
    InProgressNonViewedAlerts: Int
    ReadyForInstallTotalAlerts: Int
    ReadyForInstallNonViewedAlerts: Int
  }

  type alert {
    OrderId: String
    SiteId: String
    Viewed: Int
    Contacted: Int
    Notes: String
    AlertStatus: String
    LastModified: String
    LastModifiedAssociate: String
    ReceivingSiteId: String
    AddressLine1: String
    AddressLine2: String
    WorkPhone: String
    Comment: String
    StoFlag: Int
    SourcingDelays: Int
    StoreCode: String
  }

  type appointment {
    AppointmentId: String
    AppointmentStatus: String
    RelatedAppointmentId: String
    SalesforceAppointmentId: String
    PosCustomerID: String
    HybrisCustomerId: String
    UniversalCustomerId: String
    UniversalCustomerVehicleId: String
    SiteId: String
    Source: String
    OrderType: String
    AppointmentDate: String
    ConsultStartTime: String
    ConsultEndTime: String
    BackOfficeStartTime: String
    BackOfficeEndTime: String
    FormType: String
    FormNumber: String
    FormDate: String
    HybrisOrderId: String
    PosWebOrderId: String
    LayawayNumber: String
    QuoteNumber: String
    InvoiceNumber: String
    OrderId: String
    OrderDate: String
    CustomerType: String
    FirstName: String
    LastName: String
    EmailAddress: String
    MobilePhoneNumber: String
    HomePhoneNumber: String
    WorkPhoneNumber: String
    Address1: String
    Address2: String
    ZipCode: String
    City: String
    State: String
    Country: String
    TextOptIn: Int
    EmailOptIn: Int
    PosCustomerVehicleId: String
    HybrisCustomerVehicleId: String
    VehicleType: String
    Year: String
    Make: String
    Model: String
    VehicleId: String
    TrimId: String
    AssemblyId: String
    RecipientContactId: String
    RecipientFirstName: String
    RecipientLastName: String
    RecipientEmail: String
    RecipientPhone: String
    Comments: String
    CancelReason: String
    CancelReasonText: String
    LastModifiedByName: String
    LastModifiedDate: String
    IsMyAccountCustomer: String
    IsAaaMember: String
    IsPrivateLabelCardholder: String
    IsMilitaryPersonnel: String
    FleetNumber: String
    CompanyName: String
    CompanyName2: String
    FitmentLiftId: String
    FrontTireSize: String
    RearTireSize: String
    FrontTireDiameter: String
    RearTireDiameter: String
    AssemblyType: String
    Color: String
    GenericVehicleCategory: String
    GenericVehicleSubCategory: String
    VehicleCategory: String
    VehicleImageURL: String
    IsUnPaid: String
    IsTreadwell: String
    Quantity: String
    ArticleType: String
    ArticleSize: String
    ArticleId: String
    ArticleDescription: String
    StorageType: String
    Services: String
    SalesforceAccountId: String
    CustomerGuid: String
    SalesforceContactId: String
    ActivityType: String
  }

  type orderlineitem {
    OrderId : String
LineItemsNumber : String
Action : String
Quantity : Int 
UoM : String
Size : String
Description :String 
PONumber : String
POCreateDate : String
LineItemSourcing :String
  }

  type order {
    Client : String
    SenderPort : String
    SenderName : String
    ReceiverName : String
    ReceiverPort : String
    TransactionType : String
    SalesOrganization : String
    DistributionChannel : String
    Division : String
    CreationDate : String
    DeliveryBlock : String
    PurchaseOrderNumber : String
    ShippingCondition : String
    DeliveryMode : String
    ShippingMethodCode : String
    RejectionReason : String
    CancellationURL : String
    CancellationSource : String
    SiteId : String
    OrderType : String
    FormType : String
    FormNumber : String
    FormDate : String
    LayawayNumber : String
    QuoteNumber : String
    InvoiceNumber : String
    CustomerGuid : String
    CustomerType : String
    FitmentId : String
    IsEmailOptIn : Int 
    IsOfflineTax : Int 
    IsDropOff : Int 
    IsVehicleNotFoundException : Int 
    TaxOfflineFlag : String
    EstimatedTaxesFlag : String
    IsECCParentOrder : String
    FaxNumber : String
    TitleCode : String
    City : String
    CountryIsoCode : String 
    District : String
    FirstName : String
    LastName : String
    MiddleName2 : String
    PostalCode : String
    MiddleName : String
    Apartment : String
    Street1 : String
    Street2 : String
    RegionIsoCode : String
    Building : String
    PoBox : String
    HouseNumber : String
    LanguageIsoCode : String
    IsAddressValidated : Int 
    IsSmsOptIn : Int 
    ReferenceId : String
    ConditionCounter : String
    ConditionCode : String
    ItemValue : String
    PriceQuantity : String
    PromotionName : String
    PromotionType : String
    PromotionArticle : String
    PromotionCode : String
    Discount : String
    Email : String
    MobilePhoneNumber : String
    HomePhoneNumber : String
    WorkPhoneNumber : String
    PhoneType : String
    ObjectTypeComment : String
    ItemId : String
    ItemCategory : String
    ItemDescription : String 
    ItemUnit : String
    ItemSize : String
    ItemQuantity : Int 
    NamedDeliveryDate : String 
    Plant : String
    CacShippingPoint : String
    ParentEntryNumber : String
    ProductName : String
    ProductCode : String
    OrderTransactionId : String
    IsPdlRecommended : String
    IsFitmentValidationFailure : Int 
    EnvironmentalFeeArticle : String
    StuddingFeeArticle : String
    Comment : String
    PaymentProvider : String
    subscriptionId : String
    ValidToYear : String
    CcOwner : String
    BillAmount : Int
    AuthorizedAmount : Int
    CurrencyIsoCode : String
    RequestId : String
    AuthorizationCode : String
    TransactionTimestamp : String
    IsAvsFailure : Int 
    CustomerId : String
    ObjectType : String
    OrderId : String
    PromotionApr : String
    PromotionDescription : String
    StandardAprType : String
    PromotionAprType : String
    StandardApr : String
    PromotionDuration : String
    Cc1PlanCode : String
    PartnerRoleCode : String
    PartnerId : String
    DocumentAddressId : String
    EntryNumber : String
    LineNumber : String
    ConfirmedDate : String 
    ConfirmedQuantity : String
    AdvertiserId : String
    PublisherId : String
    ClickId : String
    ShopperId : String
    CustomerVehicleId : String
    AssemblyId : String
    Year : String
    Make : String
    Model : String
    TrimId : String
    VehicleId : String
    VehicleClass : String
    Style : String
    Body : String
    Drive : String
    AirSensor : String
    ChassisId : String
    OriginalArticle : String
    VendorPartNumberOrNewUsedDot : String
    ShippingDC : String
    VendorNumber : String
    StoreSize : String
    StoreDescription : String 
    Amount : String
    TaxType : String
    SourcingStatus : String
    PosEvent : String
    Quote : String
    PoType : String
    Vendor : String
    SupplyingSite : String 
    ReceivingSite : String
    PaymentStatus : String
    ArticleId : String
    OrderStatus : String
  }

  type return {
    ReturnOrderNumber : String
ReturnOrderReferenceNumber : String
ReturnArticle : String
ReturnArticleQuantity : Int 
ReturnArticleDescription : String
ReturnTotalAmount : String
ReturnTotalTax : String
  }

  type shipment {
    OrderId: String
    OrderDate: String
  }

  type Query {
    invoices: [invoice]
    alerts: [alert]
    returns: [return]
    orders: [order]
    orderlineitems: [orderlineitem]
    appointments: [appointment]
    alertcounts: [alertcount]
    shipments: [shipment]
    filter(SiteId: String!, AlertStatus: String!): [alert]
  }
`;

module.exports = typeDefs;
