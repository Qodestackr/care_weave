// "use client";
// https://github.com/shadcn-ui/ui/discussions/859#discussioncomment-7990189
// // https://craft.mxkaske.dev/post/server-action-experimental-hook
"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Command,
    CommandGroup,
    CommandItem, CommandList
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

type LabTests = Record<"value" | "label", string>;

const LAB_TESTS = [
    // General Health
    { label: "Complete Blood Count (CBC)", value: "Complete Blood Count" },
    { label: "Basic Metabolic Panel (BMP)", value: "Basic Metabolic Panel" },
    { label: "Comprehensive Metabolic Panel (CMP)", value: "Comprehensive Metabolic Panel" },
    { label: "Lipid Panel", value: "Lipid Panel" },
    { label: "Thyroid Function Tests (TFTs)", value: "Thyroid Function Tests" },
    { label: "Urinalysis", value: "Urinalysis" },
    { label: "Electrolyte Panel", value: "Electrolyte Panel" },
    { label: "Glucose Test", value: "Glucose Test" },
    { label: "Hemoglobin A1c (HbA1c)", value: "Hemoglobin A1c" },
    { label: "Iron Studies (Ferritin, Iron, TIBC)", value: "Iron Studies" },

    // Infectious Diseases
    { label: "COVID-19 Test (PCR, Antigen)", value: "COVID-19 Test" },
    { label: "Influenza Test", value: "Influenza Test" },
    { label: "HIV Test (Antigen/Antibody, RNA)", value: "HIV Test" },
    { label: "Hepatitis Panel (A, B, C)", value: "Hepatitis Panel" },
    { label: "Tuberculosis Test (TB Skin Test, IGRA)", value: "Tuberculosis Test" },
    { label: "Sexually Transmitted Infection (STI) Panel", value: "STI Panel" },
    { label: "Mono Test (Mononucleosis)", value: "Mono Test" },
    { label: "Strep Test (Group A Streptococcus)", value: "Strep Test" },

    // Cardiovascular Health
    { label: "Prothrombin Time (PT) / International Normalized Ratio (INR)", value: "Prothrombin Time" },
    { label: "N-terminal pro B-type Natriuretic Peptide (NT-proBNP)", value: "NT-proBNP" },
    { label: "C-reactive Protein (CRP)", value: "C-reactive Protein" },
    { label: "Homocysteine", value: "Homocysteine" },

    // Endocrine Health
    { label: "Cortisol Levels", value: "Cortisol Levels" },
    { label: "Adrenal Function Panel", value: "Adrenal Function Panel" },
    { label: "Parathyroid Hormone (PTH)", value: "Parathyroid Hormone" },
    { label: "Sex Hormone Panel (Testosterone, Estrogen, Progesterone)", value: "Sex Hormone Panel" },
    { label: "Insulin Levels", value: "Insulin Levels" },

    // Nutritional Status
    { label: "Vitamin D", value: "Vitamin D" },
    { label: "Vitamin B12", value: "Vitamin B12" },
    { label: "Folate", value: "Folate" },
    { label: "Zinc Levels", value: "Zinc Levels" },

    // Autoimmune and Inflammatory Conditions
    { label: "Antinuclear Antibodies (ANA)", value: "Antinuclear Antibodies" },
    { label: "Rheumatoid Factor (RF)", value: "Rheumatoid Factor" },
    { label: "Erythrocyte Sedimentation Rate (ESR)", value: "Erythrocyte Sedimentation Rate" },
    { label: "Anti-CCP Antibodies", value: "Anti-CCP Antibodies" },

    // Liver Function
    { label: "Liver Function Tests (LFTs)", value: "Liver Function Tests" },
    { label: "Bilirubin", value: "Bilirubin" },
    { label: "Albumin", value: "Albumin" },
    { label: "Alkaline Phosphatase (ALP)", value: "Alkaline Phosphatase" },
    { label: "Aspartate Aminotransferase (AST)", value: "Aspartate Aminotransferase" },
    { label: "Alanine Aminotransferase (ALT)", value: "Alanine Aminotransferase" },

    // Kidney Function
    { label: "Blood Urea Nitrogen (BUN)", value: "Blood Urea Nitrogen" },
    { label: "Creatinine", value: "Creatinine" },
    { label: "Glomerular Filtration Rate (GFR)", value: "Glomerular Filtration Rate" },

    // Cancer Screening
    { label: "Prostate-Specific Antigen (PSA)", value: "Prostate-Specific Antigen" },
    { label: "CA-125 (Ovarian Cancer)", value: "CA-125" },
    { label: "Carcinoembryonic Antigen (CEA)", value: "Carcinoembryonic Antigen" },
    { label: "Alpha-fetoprotein (AFP)", value: "Alpha-fetoprotein" },
    { label: "BRCA Mutation Testing", value: "BRCA Mutation Testing" },

    // Respiratory Health
    { label: "Arterial Blood Gas (ABG)", value: "Arterial Blood Gas" },
    { label: "Pulmonary Function Tests (PFTs)", value: "Pulmonary Function Tests" },
    { label: "Allergy Panel", value: "Allergy Panel" },

    // Bone and Joint Health
    { label: "Bone Density Test (DEXA)", value: "Bone Density Test" },
    { label: "Calcium Levels", value: "Calcium Levels" },

    // Gastrointestinal Health
    { label: "Celiac Disease Panel", value: "Celiac Disease Panel" },
    { label: "H. pylori Test", value: "H. pylori Test" },
    { label: "Lactose Intolerance Test", value: "Lactose Intolerance Test" },
    { label: "Stool Culture", value: "Stool Culture" },
    { label: "Fecal Occult Blood Test (FOBT)", value: "Fecal Occult Blood Test" },

    // Reproductive Health
    { label: "Pregnancy Test (hCG)", value: "Pregnancy Test" },
    { label: "Follicle Stimulating Hormone (FSH)", value: "Follicle Stimulating Hormone" },
    { label: "Luteinizing Hormone (LH)", value: "Luteinizing Hormone" },
    { label: "Prolactin", value: "Prolactin" },
    { label: "Anti-Mullerian Hormone (AMH)", value: "Anti-Mullerian Hormone" },

    // Genetic and Rare Diseases
    { label: "Genetic Carrier Screening", value: "Genetic Carrier Screening" },
    { label: "Chromosomal Analysis (Karyotyping)", value: "Chromosomal Analysis" },
    { label: "Specific Genetic Mutation Testing (e.g., BRCA, CFTR)", value: "Specific Genetic Mutation Testing" },

    // Mental Health
    { label: "Thyroid Function Tests (TFTs)", value: "Thyroid Function Tests" },
    { label: "Vitamin D", value: "Vitamin D" },
    { label: "Vitamin B12", value: "Vitamin B12" },
];


export function FancyMultiSelect() {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<LabTests[]>([LAB_TESTS[4]]);
    const [inputValue, setInputValue] = React.useState("");
    console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', inputValue);

    const handleUnselect = React.useCallback((framework: LabTests) => {
        setSelected(prev => prev.filter(s => s.value !== framework.value));
    }, []);

    const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
        const input = inputRef.current
        if (input) {
            if (e.key === "Delete" || e.key === "Backspace") {
                if (input.value === "") {
                    setSelected(prev => {
                        const newSelected = [...prev];
                        newSelected.pop();
                        return newSelected;
                    })
                }
            }
            // This is not a default behaviour of the <input /> field
            if (e.key === "Escape") {
                input.blur();
            }
        }
    }, []);

    const selectables = LAB_TESTS.filter(framework => !selected.includes(framework));
    console.log(/**selectables, */ selected, inputValue);

    return (
        <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
            <CommandList>

                <div
                    className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                >
                    <div className="flex gap-1 flex-wrap">
                        {selected.map((framework) => {
                            return (
                                <Badge key={framework.value} variant="secondary">
                                    {framework.label}
                                    <button
                                        className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                handleUnselect(framework);
                                            }
                                        }}
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }}
                                        onClick={() => handleUnselect(framework)}
                                    >
                                        <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                                    </button>
                                </Badge>
                            )
                        })}
                        {/* Avoid having the "Search" Icon */}
                        <CommandPrimitive.Input
                            ref={inputRef}
                            value={inputValue}
                            onValueChange={setInputValue}
                            onBlur={() => setOpen(false)}
                            onFocus={() => setOpen(true)}
                            placeholder="Start typing lab tests to select..."
                            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
                        />
                    </div>
                </div>
                <div className="absolute lg:w-[500px] mt-2">
                    {open && selectables.length > 0 ?
                        <div className="absolute w-full top-0 z-10 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                            <CommandGroup className="h-full z-50 overflow-auto">
                                {selectables.map((framework) => {
                                    return (
                                        <CommandItem
                                            key={framework.value}
                                            onMouseDown={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                            }}
                                            onSelect={(value) => {
                                                setInputValue("")
                                                setSelected(prev => [...prev, framework])
                                            }}
                                            className={"cursor-pointer"}
                                        >
                                            {framework.label}
                                        </CommandItem>
                                    );
                                })}
                            </CommandGroup>
                        </div>
                        : null}
                </div>
            </CommandList>
        </Command >
    )
}