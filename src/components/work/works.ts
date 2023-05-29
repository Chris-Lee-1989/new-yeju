const works: WorkType[] = [
    {
        imageUrl: '/images/apple.jpg',
        background: 'red',
        title: 'Apple',
        description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
    }, 
    {
        imageUrl: '/images/msync.jpg',
        background: 'orange',
        title: 'm-sync',
        description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
    },
    {
        imageUrl: '/images/apple.jpg',
        background: 'yellow',
        title: 'Apple',
        description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
    }, 
    {
        imageUrl: '/images/msync.jpg',
        background: 'green',
        title: 'm-sync',
        description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
    },
    {
        imageUrl: '/images/apple.jpg',
        background: 'blue',
        title: 'Apple',
        description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
    }, 
    {
        imageUrl: '/images/msync.jpg',
        background: 'purple',
        title: 'm-sync',
        description: `모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.\n헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다.\n국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다.`,
    },
];

export interface WorkType {
    imageUrl: string;
    title: string;
    description: string;
    background: string;
}

export default works