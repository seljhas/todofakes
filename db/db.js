const order = [
  {
    id: 1,
    properties: {
      channel: {
        description: "The channel details for this order",
        type: "object",
        required: ["slug", "orderCode"],
        properties: {
          slug: {
            description: "The channel unique slug",
            type: "string"
          },
          orderCode: {
            description: "The public order number/code of the order",
            type: "string"
          }
        }
      },
      placedAt: {
        description:
          "Date when the order was placed, in UTC ([RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6))",
        type: "string",
        format: "date-time"
      },
      currency: {
        type: "string",
        description: "The current currency, in ISO 4217 format.",
        default: "EUR"
      },
      total: {
        description:
          "Total price of the order, in INTEGER format represented in the fractional or subunit of the currency",
        type: "integer",
        format: "int32"
      },
      items: {
        description: "Order items",
        type: "array",
        items: {
          type: "object",
          required: ["posRef", "qty", "price", "modifiers"],
          properties: {
            posRef: {
              description: "The POS ID reference",
              type: "string"
            },
            name: {
              description: "Item name reported in order",
              type: "string"
            },
            qty: {
              description: "Quantity ordered",
              type: "integer",
              format: "int32"
            },
            price: {
              description:
                "Unit price reported in the order, in INTEGER format represented in the fractional or subunit of the currency",
              type: "integer",
              format: "int32"
            },
            modifiers: {
              description: "Modifiers found for this item in the order",
              type: "array",
              items: {
                type: "object",
                required: ["posRef", "qty", "price"],
                properties: {
                  posRef: {
                    description: "The POS ID reference",
                    type: "string"
                  },
                  name: {
                    description: "Item name reported in order",
                    type: "string"
                  },
                  qty: {
                    description: "Quantity ordered",
                    type: "integer",
                    format: "int32"
                  },
                  price: {
                    description:
                      "Unit price reported in the order, in INTEGER format represented in the fractional or subunit of the currency",
                    type: "integer",
                    format: "int32"
                  }
                }
              }
            }
          }
        }
      },
      client: {
        description: "The client details. NOT ALWAYS available",
        type: "object",
        properties: {
          name: {
            description: "Client name",
            type: "string"
          }
        }
      },
      clientComments: {
        description: "Custom customer notes for this order",
        type: "string",
        default: ""
      },
      suggestedDeliveryTime: {
        description:
          "Date suggested to deliver the order to the customer. It is: 'asap' string or a datetime string in UTC [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6)",
        type: "string"
      },
      fulfillment: {
        description:
          "Details about how the order will be delivered to the customer",
        type: "object",
        required: ["type"],
        properties: {
          type: {
            description: "Order delivery type",
            type: "string",
            enum: ["delivery-by-channel", "delivery-by-location"]
          }
        }
      },
      payment: {
        description: "Customer payment details",
        type: "object",
        required: ["type"],
        properties: {
          type: {
            description: "Method used to pay the order",
            type: "string",
            enum: ["card", "cash-on-delivery"]
          }
        }
      },
      currentStatus: {
        description: "The current order status.",
        type: "string",
        enum: ["ACEPTED"]
      }
    }
  }
];

export default order;
