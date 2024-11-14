# Entry
    - sort:                     number
    - title:                    string,
    - description:              string
    - updatedDate:              date
    - heroImage:                string | null, optional
    - cardIcon:                 string | null, optional
    - badge:                    string | null, optional
    - mediaCaptionsByFilename:  [(string, string)] | null, optional
    - hideMainGallery:          boolean | null, optional
    - sortMainGalleryBy:        { *random* | fileNameText | fileNameList | captionText | captionList } | null, optional

# EntryWithTags (extends Entry)
    - tags: [string] | null, optional, unique

# Blog (extends EntryWithTags)
    - publicationDate: date

# Store Item (extends Entry)
    - price:                string
    - oldPrice:             string | null, optional
    - shopUrl:              string | null, optional
    - customButtonLabel:    string | null, optional
    - customButtonUrl:      string | null, optional

# Project (extends Entry)
    - status:           string | null, optional
    - startDate:        string | null, optional
    - lastActiveDate:   string | null, optional

# Hobby (extends EntryWithTags)
    - startDate:        string | null, optional
    - lastActiveDate:   string | null, optional