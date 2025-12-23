export const FIGMA_TOKENS = {
    // ----------------------------------------------------
    // 1. 底部场景 (Section_Footer_Scene)
    // ----------------------------------------------------
    Footer: {
        height: "300px", // [AbsoluteBoundingBox Height]
        bgColor: "transparent", // Keep transparent if it's just a container

        Bg_Shape_Hill: {
            color: "#34D399", // [Fill HEX] e.g. #059669
            height: "100%", // Usually 100% of footer, or specific px
            borderRadiusTop: "40px", // [CornerRadius] top-left/top-right
        },

        Btn_Confirm_Primary: {
            width: "240px",  // [Width]
            height: "64px",  // [Height] - Total height area

            // Front Surface (The clickable part)
            Surface_Front: {
                height: "56px", // [Height] of the top surface layer
                color: "#10B981", // [Fill HEX]
                borderRadius: "16px", // [CornerRadius]
                borderBottomWidth: "0px", // If utilizing border for 3D instead of shadow layer
            },

            // 3D Shadow Layer (The part visible underneath)
            Layer_3D_Shadow: {
                height: "64px", // Usually same as total height or slightly larger
                color: "#047857", // [Fill HEX] Darker shade
                offsetY: "8px",   // How much it sticks out below the front surface
                borderRadius: "16px",
            },

            Text: {
                fontSize: "20px",
                fontWeight: "700",
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif", // Check Figma 'Text' properties
            }
        }
    },

    // ----------------------------------------------------
    // 2. 顶部提问 (Container_Question_Whole)
    // ----------------------------------------------------
    Question: {
        width: "320px", // [Width] or '90%'

        Bubble_Body: {
            padding: "24px", // [Padding]
            color: "#FFFFFF", // [Fill HEX]
            borderRadius: "24px", // [CornerRadius]
            shadow: "0px 4px 12px rgba(0,0,0,0.1)", // [Effects] Drop Shadow
        },

        Shape_Bubble_Tail: {
            // Absolute positioning coordinates relative to Bubble_Body
            width: "24px",
            height: "24px",
            color: "#FFFFFF",
            bottomOffset: "-10px", // Negative value to stick out
            leftOffset: "50%",      // Usually centered
        }
    },

    // ----------------------------------------------------
    // 3. 中间选项 (Grid_Container_Options)
    // ----------------------------------------------------
    Options: {
        gridGap: "16px", // [AutoLayout] Gap between items
        padding: "0 24px",

        Btn_Option_Item: {
            height: "80px", // [Height]
            color: "rgba(255, 255, 255, 0.2)", // [Fill] often has opacity
            borderColor: "rgba(255, 255, 255, 0.5)", // [Stroke]
            borderWidth: "2px",
            borderRadius: "16px",
            textColor: "#FFFFFF",
            fontSize: "18px",
        }
    },

    // ----------------------------------------------------
    // 4. Global / View Page
    // ----------------------------------------------------
    Page: {
        background: "linear-gradient(180deg, #7DD3FC 0%, #E0F2FE 100%)", // [Fill] of the main frame
    }
};
